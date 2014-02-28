/*global Ember, WDD, Utils*/
(function () {
    "use strict";

    var App = this;

    App.SessionController = Ember.Controller.extend({

        isLoggedIn : false,

        username : '',

        hostname : window.location.port === '9000' ? 'http://0.0.0.0:8000' : '',

        attemptedTransition : null,

        logout : function () {


            var controller = this;

            Ember.$.ajax({
                type : 'GET',
                url : controller.get('hostname') + 'employees/logout/',
                success : function (m) {

                    Utils.cookie.del('EmberUser');

                    controller.set('isLoggedIn', false);
                    controller.set('username', '');

                    App.reset();
                    window.location.reload(true);

                },
                error : function (m) {
                    Ember.Logger.debug('unable to log out', m);
                }
            });
        },

        init : function () {
            this._super();
            this.set('isLoggedIn',  !!Utils.cookie.get('EmberUser'));
            this.set('username', Utils.cookie.get('EmberUser'));
        }
    });

    App.SessionRoute = Ember.Route.extend({

        beforeModel : function (transition) {

            var controller = this.controllerFor('session');
            if (controller.get('isLoggedIn') && controller.get('attemptedTransition')) {
                controller.get('attemptedTransition').retry();
            } else if (controller.get('isLoggedIn')) {
                this.transitionTo('/');
            }
        },

        actions : {
            login : function () {

                if (window.location.hostname === '') {
                    this.controllerFor("session").set('isLoggedIn', true);
                    Utils.cookie.set('EmberUser', 'offline user');
                    return;
                }

                Ember.$('#loginButton').addClass('working');

                var route = this,

                    controller = this.controllerFor('session'),

                    setSession = function (m) {

                        //set the Utils.cookies
                        Utils.cookie.set('EmberUser', m.data.username, 7);
                        window.location.reload(true);

                    },

                    loginError = function (m, t, a) {

                        var message,
                            button = Ember.$('#loginButton'),
                            position = button.position(),
                            width = button.width(),
                            e;

                        if (t === 'error') {

                            switch (m.statusCode()) {
                            case 401:
                                message = 'Invalid login credentials.';
                                break;
                            case 403:
                                message = 'You do not have sufficient access privileges.';
                                break;
                            case 404:
                                message = 'The server is currently down or login path is misconfigured.';
                                break;
                            case 500:
                                message = 'The server is currently down.';
                                break;
                            default:
                                message = 'Error connecting to authentication server.';
                                break;
                            }
                        } else if (m.status) {
                            message = 'Invalid login credentials.';
                        } else if (a < 1) {
                            message = 'Login successful but unable initiate a session.';
                        } else {
                            message = 'An error occurred and login failed.';
                        }
                        button.removeClass('working').after(
                            '<span class="errorWrapper" style="display: none; top:' +
                                position.top + 'px; left:' + (position.left + width + 25) +
                                'px;"><span class="errorMessage">' + message +
                                '</span></span>'
                        );

                        e = button.next();

                        e.fadeIn(
                            1000,
                            (function () {
                                setTimeout(
                                    (function () {
                                        e.fadeOut(
                                            1000,
                                            (function () {e.remove(); })
                                        );
                                    }),
                                    3000
                                );
                            })
                        );



                    },
                    attemptsRemaining = 2,
                    request = {
                        type : 'POST',
                        url : controller.get('hostname') + '/employees/login/',

                        data : {
                            username : Ember.$('#login input[type=text]').eq(0).val(),
                            password : Ember.$('#login input[type=password]').eq(0).val()
                        },

                        success : function (m) {

                            if (m.status && m.status === 'Authentication failed.') {
                                loginError(m);
                            }

                            //retry validation if authentication didn't return a username
                            if (!!m.data.username) {
                                setSession(m);
                            } else if (attemptsRemaining--) {
                                Ember.$.ajax(request);
                            } else {
                                loginError(m, 'success', attemptsRemaining);
                            }

                        },

                        error : function (jqXHR) { loginError(jqXHR, 'error'); }
                    };

                Ember.$.ajax(request);

            }
        }

    });

    App.SessionView = Ember.View.extend({
        templateName : 'session'
    });

}).call(WDD);