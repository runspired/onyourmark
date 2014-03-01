(function () {
    "use strict";

    var App = this;

    App.DocumentSingleController = Ember.ArrayController.extend({

        needs : ['session'],

        renderTemplate : function () {
            this.render('growl/notification', {outlet : 'growl'});
        }

    });
    App.DocumentSingleRoute = App.Route.extend({

       model : function () {
           return this.get('store').createRecord('document', {
               owner : EmberUser.id
           })
       }

    });
    App.DocumentSingleView = Ember.View.extend({
        classNames : ['container']
    });

}.call(OYM));