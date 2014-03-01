(function () {
    "use strict";
    /*
     -----------[ App Setup ]-------------
     */
    /*global Ember, window*/

    //initialize the App
    var OYM = window.OYM = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_BINDINGS: true,
        LOG_VIEW_LOOKUPS: true,
        LOG_STACKTRACE_ON_DEPRECATION: true,
        LOG_VERSION: true,
        debugMode: true,
        ready: function () {
            Ember.$("#loading").remove();
        }
    });

    //defer readiness until everything has loaded
    OYM.deferReadiness();


    OYM.Route = Ember.Route.extend({

        enter: function () {
            this._super();
            window.scrollTo(0, 0);
        }

    });

    OYM.AuthenticatedRoute = OYM.Route.extend({
        beforeModel : function (transition) {

            var sessionController = this.controllerFor('session');

            //ensure unnecessary ajax requests are aborted
            //this.get('store').adapterFor(OYM.Address).abortAll();

            if (!sessionController.get('isLoggedIn')) {
                sessionController.set('attemptedTransition', transition);
                this.transitionTo('session');
            }

        }
    });


    OYM.View = Ember.View.extend({
        tagName : 'section',
        classNames : ['contentSection'],
        classNameBindings : ['viewName'],
        viewName : ''
    });


}.call(window));