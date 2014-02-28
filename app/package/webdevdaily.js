(function () {
    "use strict";
    /*
     -----------[ App Setup ]-------------
     */
    /*global Ember, window, skrollr, ENV*/


    //allow query params
    ENV = {FEATURES: {'query-params': true}};

    //initialize the App
    var WDD = window.WDD = Ember.Application.create({
        LOG_TRANSITIONS: true,
        LOG_BINDINGS: true,
        LOG_VIEW_LOOKUPS: true,
        LOG_STACKTRACE_ON_DEPRECATION: true,
        LOG_VERSION: true,
        debugMode: true,
        ready: function () {

            window.sk = skrollr.init(
                {
                    forceHeight: false
                }
            );
            Ember.$("#loading").remove();

        }
    });

    //defer readiness until everything has loaded
    WDD.deferReadiness();


    WDD.Route = Ember.Route.extend({

        enter: function () {
            this._super();
            window.scrollTo(0, 0);
        }

    });

    WDD.AuthenticatedRoute = WDD.Route.extend({
        beforeModel : function (transition) {

            var sessionController = this.controllerFor('session');

            //ensure unnecessary ajax requests are aborted
            //this.get('store').adapterFor(WDD.Address).abortAll();

            if (!sessionController.get('isLoggedIn')) {
                sessionController.set('attemptedTransition', transition);
                this.transitionTo('session');
            }

        }
    });


    WDD.queryParamsRoute = WDD.Route.extend({

        setupController : function (controller, model, params) {

            this._super();
            Ember.Logger.debug('-----------------');
            Ember.Logger.debug(controller, model, params);
            //make queryParams accessible
            controller.set('queryParams', !!params ? Ember.copy(params) : {});

            Ember.Logger.debug('set queryParams on controller', Ember.copy(params));
        }

    });


    WDD.View = Ember.View.extend({
        tagName : 'section',
        classNames : ['contentSection'],
        classNameBindings : ['viewName'],
        viewName : ''
    });


    WDD.skrollrView = WDD.View.extend({

        classNames: ['skrollerView'],

        didInsertElement : function () {
            window.sk.refresh();
        }

    });

}.call(window));