/*global Ember, OYM, Utils*/
(function () {
    "use strict";

    var App = this;

    App.SessionController = Ember.Controller.extend({

        isLoggedIn : false,

        user : null,

        hostname : window.location.port === '9000' ? 'http://0.0.0.0:8000' : '',

        attemptedTransition : null,

        firebase : null,
        fireAuth : null,

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

            var fireb = new Firebase('https://onyourmark.firebaseio.com'),
                controller = this;

            this.set('firebase', fireb);
            this.set('fireAuth', new FirebaseSimpleLogin(fireb, function(error, user) {
                if (error) {
                    // an error occurred while attempting login
                    console.log(error);
                } else if (user) {
                    // user authenticated with Firebase
                    console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
                    controller.set('user', user);
                    controller.set('isLoggedIn', true);
                } else {
                    // user is logged out
                    controller.set('isLoggedIn', false);
                }
            }));
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

        model : function () {
            return {
                email : null,
                password : null
            };
        },

        actions : {
            login : function () {

                var controller = this.controllerFor('session'),
                    auth = controller.get('fireAuth'),
                    model = this.modelFor('session');

                auth.login('password', {
                    email : model.email,
                    password : model.password,
                    rememberMe : true
                });
            },
            register : function () {
                var controller = this.controllerFor('session'),
                    auth = controller.get('fireAuth'),
                    model = this.modelFor('session');

                console.log('registering');
                auth.createUser(
                    model.email,
                    model.password,
                    function(error, user) {
                        console.log('hello world', error);
                        if (!error) {
                            console.log('User Id: ' + user.id + ', Email: ' + user.email);
                        }
                    }
                );
            }
        }

    });

    App.SessionView = Ember.View.extend({
        templateName : 'session'
    });

}).call(OYM);