/*global OYM, Ember, Utils*/
(function () {
    "use strict";

    var App = this;

    App.ApplicationController = Ember.ArrayController.extend({

        needs : ['session'],

        renderTemplate : function () {
            this.render('growl/notification', {outlet : 'growl'});
        }

    });
    App.ApplicationRoute = App.Route.extend({

        actions : {
            silenceClick : function () {
                /* do nothing*/
            },

            logout : function () {
                this.controllerFor('session').logout();
            }
        }

    });
    App.ApplicationView = Ember.View.extend({
        classNames : ['container']
    });

}.call(OYM));