(function () {
    "use strict";

    var App = this;

    App.DocumentRoute = App.AuthenticatedRoute.extend({

        model : function () {
            return this.get('store').find('document');
        }

    });
    App.DocumentView = Ember.View.extend({
        templateName : 'document/list',
        classNames : ['container']
    });

}.call(OYM));