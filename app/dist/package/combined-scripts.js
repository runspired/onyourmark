(function() {

/*
 //Supplemental CSS
 ['http://fonts.googleapis.com/css?family=Lato:100,300,400,700|Inder',false,'','css',false] ,
*/

/*
//remove
jQuery validate
jQuery color ?
underscore
jQuery-serialize

//no dependencies and non depending on
flying focus
showdown

*/

/*global require, Nexus, DS, Utils*/

//primary application


})();

(function() {


var Utils = window.Utils = {};

Utils.cookie = {

    get : function (name) {
        "use strict";
        var cookies = document.cookie.split(";"),
            index = cookies.length,
            cookieName,
            cookieBody;

        while (index--) {
            cookieName = cookies[index].substr(0, cookies[index].indexOf("="));
            cookieBody = cookies[index].substr(cookies[index].indexOf("=") + 1);
            cookieName = cookieName.replace(/^\s+|\s+$/g, "");
            if (cookieName === name) {
                return decodeURI(cookieBody);
            }
        }

        return false;
    },

    set : function (name, value, expires) {
        "use strict";
        var date = new Date();
        date.setDate(date.getDate() + expires);
        document.cookie = name + "=" + encodeURI(value) + ((expires === null) ? "" : "; expires=" + date.toUTCString());
    },

    del : function (name) {
        "use strict";
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

Utils.array = {

    inArray : function (a, v) {
        "use strict";
        return !!~a.indexOf(v);
    }

};

Utils.string = {

    capFirstLetter : function (s) {
        "use strict";
        return s.charAt(0).toUpperCase() + s.slice(1);
    },

    pluralize : function (s) {
        "use strict";
        var plural = s;
        if (plural.slice(-1) === 'y') {
            plural = plural.slice(0, -1) + 'ies';
        } else if (plural.slice(-1) === 's' && plural.slice(-2) !== 'es') {
            plural = plural.slice(0, -1) + 'es';
        } else {
            plural = plural + 's';
        }

        return plural;
    },

    underscoreToWords : function (s) {
        "use strict";
        return s.replace(/_/g, ' ');
    },

    capitalizeWords : function (sentence) {
        "use strict";
        return sentence.split(' ')
            .map(function (word) {
                return Utils.string.capFirstLetter(word);
            })
            .join(' ');
    }
};

Utils.animate = {

    Interval : function (callback, time) {
        "use strict";
        var delay = time ? parseInt(time, 10) : 0,

        //stores the time of last callback execution for
        // play/pause behavior and firefox shunt
            lastExecution = (new Date()).getTime(),

            timeout = false,

        //execute the callback and setup the next one
            once = function () {
                callback();
                timeout = setTimeout(
                    (function () { once(); }),
                    delay
                );
            },

        //shunt for firefox, which executes setTimeout
        // up to 50% early
            checkExecution = function () {
                var time = (new Date()).getTime() - lastExecution;
                if (time >= delay) {
                    return true;
                }
                timeout = setTimeout(
                    (function () {once(); }),
                    time
                );
                return false;
            },

        //stores the amount of time elapsed prior to a pause
            timeElapsed = 0;

        //initiate the callback loop
        timeout = setTimeout(
            (function () {once(); }),
            delay
        );

        Object.defineProperty(
            this,
            'delay',
            {
                get : function () { return delay; },
                set : function (v) { delay = parseInt(v, 10); }
            }
        );

        this.reset = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = 0;
                lastExecution = (new Date()).getTime();
                timeout = setTimeout( (function () { once(); }), delay);
            }
        };

        this.pause = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = (new Date()).getTime() - lastExecution;
            }
        };

        this.play = function () {
            lastExecution = (new Date()).getTime() - timeElapsed;
            timeout = setTimeout( (function () { once(); }), Math.max(0, delay - timeElapsed));
            timeElapsed = 0;
        };

    }

};


})();

(function() {

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

})();

(function() {

/*global WDD*/
WDD.Router.map(function () {
    "use strict";

    this.route('session');
    this.resource('stream', {path : '/'}, function () {
        this.route('single', { path : '/:stream_id' });
    });

});

})();

(function() {

/*
 -----------[ REST / Ember-data Configuration ]-----------
 */

/*global DS, WDD, require, Ember, WDD_FIXTURES*/

WDD.ApplicationSerializer = DS.ActiveModelSerializer.extend({});

WDD.ApplicationAdapter = DS.ActiveModelAdapter.extend({});

DS.ArrayTransform = DS.Transform.extend({

    deserialize: function (serialized) {
        return Ember.isNone(serialized) ? null : Ember.A(serialized);
    },

    serialize: function (deserialized) {
        return Ember.isNone(deserialized) ? null : Ember.A(deserialized);
    }

});
WDD.register('transform:array', DS.ArrayTransform);

WDD.ApplicationAdapter.reopen({});

})();

(function() {

//models
//cache

var attr = window.attr = DS.attr,
    belongsTo = window.belongsTo = DS.belongsTo,
    hasMany = window.hasMany = DS.hasMany,
    Model = window.Model = DS.Model.extend({
        persistence : function () {
            "use strict";
            var isDirty = this.get('isDirty'),
                isNew = this.get('isNew'),
                isSaving = this.get('isSaving');
            return isSaving ? 'saving' :
                    (isNew ? 'new' :
                            (isDirty ? 'dirty' :
                                    'clean')
                    );
        }.property('isDirty', 'isNew', 'isSaving'),
        persistenceClass : function () {
            "use strict";
            return 'recordIs' + Utils.string.capFirstLetter(this.get('persistence'));
        }.property('persistence')
    });


})();

(function() {

WDD.Stream = Model.extend({
    name : attr('string'),
    url : attr('string'),
    categories : attr('array')
});

})();

(function() {

/*global WDD, Ember, WDD_FIXTURES, Utils*/
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

}.call(WDD));

})();

(function() {

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

})();

(function() {

/*global WDD, Ember, WDD_FIXTURES, Utils*/
(function () {
    "use strict";

    var App = this;

    App.StreamRoute = App.Route.extend({

        model : function () {
            return {};
        }

    });

    App.StreamView = App.skrollrView.extend({

    });

}.call(WDD));

})();

(function() {

/*jshint eqeqeq:false */

/**
 * Provides A base view for building select like objects.
 */

/*global App, Utils*/
(function () {
    "use strict";

    var App = this,
        set = App.set,
        get = App.get,
        indexOf = App.EnumerableUtils.indexOf,
        forEach = App.EnumerableUtils.forEach,
        isArray = App.isArray,
        precompileTemplate = App.Handlebars.compile;

    App.SelectableOption = App.View.extend(App.ViewTargetActionSupport, {

        classNames : ['selectableItem'],
        classNameBindings : ['selected', 'status'],

        selected : function () {
            //App.Logger.debug('SelectableOption view: selection changed.');
            var value = get(this, 'content'),
                selection = get(this, 'parentView.controlledSelection');

            //App.Logger.debug('selection', selection);
            //App.Logger.debug('value', value);
            if (get(this, 'parentView.multiple')) {
                //App.Logger.debug('selection is multiple checking index:', indexOf(selection, value));
                return selection && indexOf(selection, value) > -1;
            }

            return value === selection.objectAt(0);

        }.property('value', 'parentView.controlledSelection.@each'),

        template : precompileTemplate('{{view.label}}'),

        label : function () {

            var labelPath = get(this, 'parentView.optionLabelPath');

            if (!labelPath) { return ''; }

            return get(this, labelPath);

        }.property('parentView.optionLabelPath', 'content'),

        status : function () {

            var statusPath = get(this, 'parentView.optionStatusClassPath');

            if (!statusPath) { return ''; }

            return get(this, statusPath);

        }.property('parentView.optionStatusClassPath', 'content'),

        mouseDown : function () {

            if (!get(this, 'parentView.disabled')) {

                this.triggerAction({
                    action : 'select',
                    actionContext : get(this, 'content'),
                    target : this.get('parentView'),
                    bubbles : false
                });

            }
        }

    });

    App.SelectableGroup = App.CollectionView.extend(App.ViewTargetActionSupport, {

        classNames : ['selectableGroup'],
        classNameBindings : ['label'],

        controlledSelectionBinding : 'parentView.controlledSelection',
        disabledBinding : 'parentView.disabled',
        multipleBinding : 'parentView.multiple',

        optionLabelPathBinding : 'parentView.optionLabelPath',
        optionStatusClassPathBinding : 'parentView.optionStatusClassPath',

        itemViewClassBinding: 'parentView.optionView',

        targetBinding : 'parentView'

    });

    /**
     @class Selectable
     @namespace App
     @extends App.View
     */
    App.Selectable = App.View.extend({

        //structure
        classNames : ['selectable'],

        classNameBindings : ['disabled'],

        defaultTemplate : precompileTemplate('{{#if view.optionGroupPath}}{{#each view.groupedContent}}<div class="selectableGroupLabel">{{label}}</div>{{view view.groupView content=content label=label}}{{/each}}{{else}}{{#each view.filteredContent}}{{view view.optionView content=this}}{{/each}}{{/if}}'),

        /**

         Indicates whether multiple options can be selected.

         @property multiple
         @type Boolean
         @default false
         */
        multiple : true,

        /**
         The `disabled` attribute of the input element. Indicates whether
         the element is disabled from interactions.

         @property disabled
         @type Boolean
         @default false
         */
        disabled : false,

        /**
         The list of options.

         If `optionLabelPath` and `optionValuePath` are not overridden, this should
         be a list of strings, which will serve simultaneously as labels and values.

         Otherwise, this should be a list of objects.

         @property content
         @type Array
         @default null
         */
        content : null,

        /**
         When `multiple` is `false`, the element of `content` that is currently
         selected, if any.

         When `multiple` is `true`, an array of such elements.

         Set `selection` not `value to set the initial value.

         @property selection
         @type Object or Array
         @default null
         */
        selection : null,

        controlledSelection : null,

        values : function () {
            var objects = get(this, 'controlledSelection'),
                valuePath = get(this, 'optionValuePath').replace(/^content\.?/, ''),
                multiple = get(this, 'multiple'),
                selection = get(this, 'selection'),
                values = [];

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (object) {
                values.push(get(object, valuePath));
            });

            //update selection
            if (multiple) {
                //TODO this may cause an unforseen upgrade from an array to an App array
                set(this, 'selection', values);
            } else {
                set(this, 'selection', values[0]);
            }

            return values;
        }.property().volatile(),

        labels : function () {
            var objects = get(this, 'controlledSelection'),
                labelPath = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                labels = App.A();

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (object) {
                labels.addObject(get(object, labelPath));
            });
            return labels;
        }.property().volatile(),

        /**
         @private

         In single selection mode (when `multiple` is `false`), value can be used to
         get the current selection's value or set the selection by it's value.

         In multiple selection mode, value can be used to get an array of the values
         represented by the `selection` array, or to set the selection by presence
         (see notes on presence).

         `Set by presence` During multiple selection mode, setting value operates
         mechanically identically to single selection, but magic hAppens underneath
         to support pushing the value to and splicing the value from arrays.  To do
         this you pass the object in both to set it and to remove it.

         Example:

         Given
         content = [{id:1},{id:2},{id:3}]
         selection = []
         optionValuePath = 'content.id'

         Then
         this.set('value' , {id:1}) => selection = [{id:1}]
         this.get('value') => '1'
         this.set('value' , {id:2}) => selection = [{id:1},{id:2}]
         this.get('value') => '1; 2'
         this.set('value' , {id:1}) => selection = [{id:2}]
         this.get('value') => '2'

         @property value
         @type String
         @default null
         */
        value : function (key, obj) {

            App.Logger.debug('value set called:', obj);
            var selection = get(this, 'controlledSelection'),
                index = indexOf(selection, obj);;

            //handle as array
            if (get(this, 'multiple')) {

                if (arguments.length === 2) {

                    if (index === -1) {
                        selection.addObject(obj);
                        //set(this, 'controlledSelection.[]', selection);
                    } else {
                        selection.removeObject(obj);
                        //set(this, 'controlledSelection.[]', selection);
                    }
                }

                return selection;
            }

            //handle as string
            if (arguments.length === 2) {
                if (index === -1) {
                    set(this, 'controlledSelection.[]', [obj]);
                } else {
                    set(this, 'controlledSelection.[]', []);
                }
            }

            //trigger change
            get(this, 'values');
            get(this, 'labels');
            return selection;

        }.property('controlledSelection'),

        /**
         The path of the option labels.

         @property optionLabelPath
         @type String
         @default 'content'
         */
        optionLabelPath : 'content',

        /**
         The path of the option labels.

         @property optionLabelPath
         @type String
         @default 'content'
         */
        optionValuePath : 'content',

        /**
         Path on the option to that should be bound as a class

         @property optionStatusClassPath
         @type String
         @default null
         */
        optionStatusClassPath : null,

        /**
         The path of the option group.
         `content` should be pre-sorted by `optionGroupPath`, set
         `sortContentByGroupPath` to `true` to have App.Selectable sort it.

         @property optionGroupPath
         @type String
         @default null
         */
        optionGroupPath : null,

        /**
         Determines whether to sort content by `optionGroupPath` or to rely on
         initial user order. WARNING this WILL replace content with a new content array

         @property sortContentByGroupPath
         @type Boolean
         @default false
         */
        sortContent : false,

        /**
         The view class for optgroup.

         @property groupView
         @type App.View
         @default As defined below.
         */
        groupView : App.SelectableGroup,

        optionView : App.SelectableOption,

        controlledContent : null,

        filteredContent : function () {
            return get(this, 'controlledContent');
        }.property('controlledContent', 'controlledContent.@each'),

        groupedContent : function () {
            var groupPath = get(this, 'optionGroupPath'),
                groupedContent = App.A(),
                content = get(this, 'filteredContent') || [];

            forEach(content, function (item) {
                var label = get(item, groupPath);

                if (get(groupedContent, 'lastObject.label') !== label) {
                    groupedContent.pushObject({
                        label: label,
                        content: App.A()
                    });
                }

                get(groupedContent, 'lastObject.content').push(item);
            });

            return groupedContent;
        }.property('optionGroupPath', 'filteredContent', 'filteredContent.@each'),

        getObjectByValue : function (objects, value, valuePath) {

            var object = null;

            if (!objects || App.typeOf(objects) !== 'array') {
                return null;
            }

            objects.forEach(function (obj) {
                if (get(obj, valuePath) === value) {
                    object = obj;
                }
            });
            return object;
        },

        init : function () {

            this._super();

            var selection = App.copy(get(this, 'selection')),
                self = this,
                controlledSelection = App.A(),
                multiple = get(this, 'multiple'),
                content = get(this, 'content'),
                valuePath = get(this, 'optionValuePath').replace(/^content\.?/, ''),
                labelPath = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                sortOptions = [];

            if (multiple) {
                if (!isArray(selection)) {
                    controlledSelection.addObject(this.getObjectByValue(content, selection, valuePath));
                } else {
                    controlledSelection.addObjects(selection.map(function (object) {
                        return self.getObjectByValue(object);
                    }));
                }
            } else if (isArray(selection)) {
                App.Logger.error('You specified `multiple=false` but provided an Array for selection.');
            } else {
                controlledSelection.addObject(this.getObjectByValue(content, selection, valuePath));
            }
            set(this, 'controlledSelection', controlledSelection);

            if (get(this, 'sortContent')) {
                if (get(this, 'optionGroupPath')) {
                    sortOptions.push(get(this, 'optionGroupPath'));
                }
                sortOptions.push(labelPath);
            }

            set(this, 'controlledContent', App.ArrayController.create({
                content : content,
                sortProperties : sortOptions,
                sortAscending : true
            }));
        },

        actions : {
            select : function (object) {
                set(this, 'value', object);
                return false;
            }
        }

    });

}).call(Ember);

})();

(function() {

/**

 Author: Chris Thoburn

 Ember Autocomplete is a complete autocomplete solution with support for option groups and label paths.

 */

/**
 @class Autocomplete
 @namespace App
 @extends App.View
 */
/*global Ember, Utils*/
(function () {
    "use strict";
    var App = this,
        set = App.set,
        get = App.get,
        indexOf = App.EnumerableUtils.indexOf,
        indexesOf = App.EnumerableUtils.indexesOf,
        forEach = App.EnumerableUtils.forEach,
        replace = App.EnumerableUtils.replace,
        isArray = App.isArray,
        precompileTemplate = App.Handlebars.compile,
        inArray = Utils.array.inArray;

    App.Autocomplete = App.Selectable.extend({

        //structure
        classNames      :   ['App-autocomplete', 'autocompleteBox'],
        classNameBindings : ['isFocused:focused:'],
        tagName         :   'ul',
        placeholder     :   'Search...',
        autofocus       :   false,
        defaultTemplate : precompileTemplate('{{#if view.multiple}}' +
            '{{#each view.controlledSelection}}' +
            '{{view view.Tag content=this}}' +
            '{{/each}}' +
            '{{/if}}' +
            '<li class="autocompleteTag selectableTag currentCompletionBox">' +
            '{{view view.textInput autofocus=view.autofocus ' +
            'value=view.searchString placeholder=view.placeholder ' +
            'class="autocomplete invisiBox"}}' +
            '<div class="autocompleteOptions selectable">' +
            '{{#if view.optionGroupPath}}' +
            '{{#each view.groupedContent}}' +
            '<div class="selectableGroupLabel">{{label}}</div>' +
            '{{view view.groupView content=content label=label}}' +
            '{{/each}}' +
            '{{else}}' +
            '{{#each view.filteredContent}}' +
            '{{view view.optionView content=this}}' +
            '{{/each}}' +
            '{{/if}}' +
            '</div>' +
            '</li>'
            ),

        Tag : App.View.extend(App.ViewTargetActionSupport, {
            tagName : 'li',
            classNames : ['autocompleteTag', 'selectableTag'],
            classNameBindings : ['status'],
            defaultTemplate : precompileTemplate('{{view.label}}<span {{action "removeTag" view.content target="view"}}>X</span>'),

            label : function () {

                var labelPath = get(this, 'parentView.optionLabelPath');

                if (!labelPath) { return ''; }

                App.Logger.debug('getting label', labelPath, get(this, labelPath));
                return get(this, labelPath);

            }.property('parentView.optionLabelPath', 'content'),

            status : function () {

                var statusPath = get(this, 'parentView.optionStatusClassPath');

                if (!statusPath) { return ''; }

                App.Logger.debug('getting status', statusPath);
                return get(this, statusPath);

            }.property('parentView.optionStatusClassPath', 'content'),

            actions : {
                removeTag : function () {
                    App.Logger.debug('removing tag');
                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'content'),
                        target : this.get('parentView'),
                        bubbles : false
                    });
                    return false;
                }
            },

            init : function () {
                App.Logger.debug('content init', get(this, 'content'));
                App.Logger.debug('label init', get(this, 'label'));
            }
        }),

        /**
         Allow us to edit the text field without automatically updating
         the value
         */
        searchString : '',

        multiple : false,
        disallowMultiple : true,
        disabled : false,
        content : null,
        selection : null,

        enforceOne : false,

        /**
         *
         */
        /*
         contentChangeObserver : function () {


         var searchString = this.get('searchString'),
         selection = this.get('controlledSelection.[]'),
         options = this.get('filteredContent'),
         enforce = this.get('enforceOne'),
         label = this.get('optionLabelPath').replace(/^content\.?/, '');

         if (enforce && !selection.length && options.length) {
         selection.addObject(options.objectAt(0));
         }

         }.observes('content'),
         */

        /**

         */
        labelsChangeObserver : function () {
            var labels = get(this, 'labels.[]'),
                multiple = get(this, 'multiple');

            if (!multiple) {
                App.Logger.debug('setting search string to first label', labels);
                set(this, 'searchString', labels.objectAt(0));
            } else {
                App.Logger.debug('setting search string to empty');
                set(this, 'searchString', '');
            }
        }.observes('labels', 'controlledSelection.@each'),


        /**
         @private

         True when the textInput has focus.

         To focus the textInput on initialization set `autofocus` to `true`

         @property isFocused
         @type Boolean
         @default false
         */
        isFocused : false,

        isHovered : false,

        /**
         @private

         The option to which a 'pre-selection' hovered state is given
         when the user utilizes up or down arrow keys to pick an option.

         @property hoveredOption
         @type Object
         @default null
         */
        hoveredOption : null,

        textInputElement : null,

        /**
         The view class for textfield

         @property textInput
         @type App.TextField
         @default As defined below.
         */
        textInput : App.TextField.extend(App.TargetActionSupport, {

            keyDown : function (e) {

                var options, last, index, newIndex,
                    selected,
                    currentString = get(this, 'value');

                if (e.keyCode === 8 && get(this, 'parentView.multiple') && currentString === '') {
                    selected = get(this, 'parentView.controlledSelection');
                    selected.removeObject(selected.objectAt(selected.length - 1));
                } else if (e.keyCode === 13) { //return

                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'parentView.hoveredOption'),
                        target : this.get('parentView'),
                        bubbles : false
                    });

                    //focus forward
                    if (!get(this, 'parentView.multiple')) {
                        App.$(":input:eq(" + App.$(":input").index(this.$()) + 1 + ")").focus();
                    } else {
                        ;// tag it
                    }

                    return false;

                } else if (get(this, 'parentView.multiple') && inArray([188, 13], e.keyCode)) {

                    //32 space shouldn't work since many items will have spaces
                    //return, space or comma: tab key should still be passed through to allow context switching
                    set(this, 'parentView.value', get(this, 'parentView.hoveredOption'));
                    return false;

                } else if (e.keyCode === 40) { //arrow down

                    options = get(this, 'parentView.filteredContent');
                    last = options.length - 1;
                    index = indexOf(
                        options,
                        get(this, 'parentView.hoveredOption')
                    );
                    newIndex = (index === last) ? last : index + 1;

                    App.Logger.debug(options, last, index, newIndex);
                    set(
                        this,
                        'parentView.hoveredOption',
                        options.objectAt(newIndex)
                    );
                    App.Logger.debug('hovered option is:', get(this, 'parentView.hoveredOption'));
                    return false;

                } else if (e.keyCode === 38) { //arrow up

                    options = this.get('parentView.filteredContent');
                    index = indexOf(
                        options,
                        this.get('parentView.hoveredOption')
                    );
                    newIndex = (index === 0) ? 0 : index - 1;

                    set(
                        this,
                        'parentView.hoveredOption',
                        options.objectAt(newIndex)
                    );
                    App.Logger.debug('hovered option is:', get(this, 'parentView.hoveredOption'));
                    return false;

                } else { //any other key
                    this.set(
                        'parentView.hoveredOption',
                        this.get('parentView.filteredContent').objectAt(0)
                    );
                }

            },

            focusOut : function (e) {

                set(this, 'parentView.isFocused', false);

                if (get(this, 'parentView.enforceOne')) {
                    if (!get(this, 'parentView.controlledSelection.length')) {
                        set(this, 'parentView.value', get(this, 'parentView.hoveredOption'));
                    }
                } else {
                    /*this.triggerAction({
                     action: 'change',
                     context : {
                     value : get(this, 'value'),
                     view : get(this, 'parentView')
                     },
                     target : 'parentView'
                     });*/
                }

            },

            focusIn : function () {
                set(this, 'parentView.isFocused', true);
            },

            autofocus : false,

            didInsertElement : function () {

                if (!!this.autofocus) {
                    this.$().focus();
                }

                set(this, 'parentView.textInputElement', this.$());
            }
        }),

        filteredContent : function () {

            var searchString = get(this, 'searchString'),
                content = get(this, 'controlledContent.[]'),
                selection = get(this, 'controlledSelection.[]'),
                multiple = get(this, 'multiple'),
                disallowMultiple = get(this, 'disallowMultiple'),
                label = get(this, 'optionLabelPath').replace(/^content\.?/, ''),
                regex = new RegExp(searchString, 'i'),
                opts;

            if (!content) {
                return [];
            }

            if (!searchString && !selection.length) {
                return content;
            }

            opts = content.filter(
                function (option) {
                    if (multiple && disallowMultiple && indexOf(selection, option) > -1) {
                        return false;
                    }
                    return get(option, label) ? get(option, label).match(regex) : false;
                }
            );

            set(this, 'hoveredOption', opts[0]);

            return opts;

        }.property('searchString', 'controlledSelection.@each', 'controlledContent.@each'),

        groupView : App.SelectableGroup.extend({

            hoveredOptionBinding : 'parentView.hoveredOption',

            textInputElementBinding : 'parentView.textInputElement',

            classNames : ['autocompleteGroup']


        }),
        /**
         The view class for option.

         @property optionView
         @type App.View
         @default As defined below.
         */
        optionView : App.SelectableOption.extend({

            classNames : ['autocompleteOption'],
            classNameBindings : ['hovered'],

            hovered : function () {
                var content = get(this, 'content'),
                    hovered = get(this, 'parentView.hoveredOption');

                return content === hovered;

            }.property('content', 'parentView.hoveredOption').readOnly(),

            mouseDown : function () {

                if (!get(this, 'parentView.disabled')) {

                    this.triggerAction({
                        action : 'select',
                        actionContext : get(this, 'content'),
                        target : this.get('parentView')
                    });

                    //focus forward
                    if (!get(this, 'parentView.multiple')) {
                        var element = get(this, 'parentView.textInputElement'),
                            index = App.$(":input").index(element) + 1;

                        App.$(":input:eq(" + index + ")").focus();
                    } else {
                        get(this, 'parentView.textInputElement').focus();
                    }

                }
            }

        }),

        didInsertElement : function () {
            this.labelsChangeObserver();
        }

    });
}).call(Ember);

})();

(function() {

(function () {
    "use strict";

    /*global Ember*/
    var precompileTemplate = Ember.Handlebars.compile;

    Ember.CarouselComponent = Ember.Component.extend({
        layout: precompileTemplate('<div class="carouselSlides">{{yield}}</div>'),
        classNames: ['carousel'],
        classNameBindings: ['sliding'],

        slideIndex : 0,
        currentSlideIndex : -1,
        slideIndexObserver : function () {
            var slideCount = this.get('slideCount'),
                slideIndex = this.get('slideIndex');

            if (slideIndex < 0) {
                this.set('slideIndex', slideCount - 1);
            } else if (slideIndex >= slideCount) {
                this.set('slideIndex', 0);
            }
            this.to(this.get('slideIndex'));
        }.observes('slideIndex'),

        //return a slideCount that updates dynamically when content changes
        slideCount : function () {
            var innerWrapper = this.$('.carouselSlides').eq(0),
                slides = this.$('.carouselSlide'),
                length = this.$('.carouselSlide').length;
            innerWrapper.css({
                width : '' + (length * 100) + '%'
            });
            slides.css({
                width : '' + (100 / length) + '%'
            });
            return length;
        }.property('content.@each'),

        didInsertElement : function () {
            //set content if it wasn't passed in directly
            if (!this.get('content')) {
                this.set('content', new Array(this.$('.carouselSlide').length));
            }

            //trigger initial slideCount
            this.get('slideCount');

            //trigger initial position
            this.to(this.get('slideIndex'));
        },


        prev: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') - 1);
        },
        next: function () {
            if (this.get('sliding')) {
                return;
            }
            this.set('slideIndex', this.get('slideIndex') + 1);
        },
        to: function (pos) {
            Ember.Logger.debug('sliding to', pos);
            var direction,
                self = this;
            if (!((0 <= pos && pos < this.get('slideCount')))) {
                return;
            }
            if (this.get('sliding')) {
                return this.$().one('slid', function () {
                    return self.to(pos);
                });
            }
            direction = pos > this.get('slideIndex') ? 'next' : 'prev';
            return this.slide(direction, pos);
        },
        /*
         Use slide to transition to any slide with any animation direction.
         E.g., by specifiying type = 'next' and next = first_slide_index, we can
         transition to the first slide by moving to the right.

         type: next | prev
         nextIndex: is the index of the next slide

         this works by getting the next index, appending pushing it either left
          or right, frame shifting the entire inner carousel, then fixing the carousel's
          location
         */
        slide: function (shiftType, nextIndex) {

            if (this.get('currentSlideIndex') === nextIndex) {
                Ember.Logger.debug('Slide: no index change.');
                return;
            }
            var innerWrapper = this.$('.carouselSlides').eq(0),
                self = this;

            //flag the carousel that the transition is occurring
            this.set('sliding', true);

            innerWrapper.animate(
                { left : '-' + (nextIndex * 100) + '%' },
                500,
                'swing',
                function () {
                    self.set('sliding', false);
                    self.set('currentSlideIndex', nextIndex);
                }
            );
        }
    });


    Ember.CarouselSlide = Ember.View.extend({
        classNames: ['carouselSlide']
    });

    Ember.Handlebars.helper('carousel-component', Ember.CarouselComponent);

    Ember.Handlebars.helper('carousel-slide', Ember.CarouselSlide);


}());

})();

(function() {

/**
 * Created by James Thoburn on 12/21/13.
 */

/*
 Loads all belongs To relationships recursively
 */
/*global Ember, DS*/
DS.Store.prototype.findRelated = function (type, id) {
    "use strict";

    var store = this,

        traversedRecords = [],

        //recursively find belongsTo relationships
        findRelatedRecords = function (record, parent) {

            traversedRecords.push(record);

            record.eachRelationship(function (r, n) {

                //ignore non-belongsTo relationships
                if (n.kind !== 'belongsTo' || !n.type) {
                    return;
                }

                //usually this will be an existing record
                var relatedRecord = record.get(n.key);

                //Ember.Logger.debug('relatedRecord get', relatedRecord);

                //but sometimes it will be an ID, if the ID isn't in the store
                //  we can be certain this record hasn't been altered
                if (relatedRecord == parseInt(relatedRecord, 10) && store.hasRecordForId(n.type.typeKey, relatedRecord)) {
                    relatedRecord = store.recordForId(n.type.typeKey, relatedRecord);
                }

                //append now
                if (!!relatedRecord && (!parent || relatedRecord !== parent)) {

                    record.set(n.key, relatedRecord);

                    //get related records for this record
                    if (traversedRecords.indexOf(relatedRecord) === -1) {
                        findRelatedRecords(relatedRecord, record);
                    }
                } else if (relatedRecord == parseInt(relatedRecord, 10) && !store.hasRecordForId(n.type.typeKey, relatedRecord)) {

                    //append by promise
                    store.findById(n.type.typeKey, relatedRecord).then(
                        function (relatedRecord) {

                            record.set(n.key, relatedRecord);

                            //get related records for this record
                            if (traversedRecords.indexOf(relatedRecord) === -1) {
                                findRelatedRecords(relatedRecord, record);
                            }

                        }
                    );
                }
                return;
            });
        };

    return this.find(type, id).then(function (record) {
        findRelatedRecords(record);
        return record;
    });

};

})();

(function() {


//signal the the APP is now loaded
//we do this at the beginning of the file
//because this is the last file
//and we need to bind the store first
/*global WDD, Ember*/
WDD.advanceReadiness();

var precompileTemplate = Ember.Handlebars.compile;

WDD.TextField = Ember.TextField.extend({
    attributeBindings : ['autofocus', 'name'],
    autofocus : false,
    didInsertElement : function () {
        "use strict";
        if (!!this.autofocus) {
            this.$().focus();
        }
    }

});

WDD.Checkbox = Ember.Checkbox.extend({
    attributeBindings : ['name']
});

WDD.liveNotes = Ember.View.extend({
    templateName : 'liveNotes',
    classNames : ['liveNotes'],
    tagName : 'div',
    name : '',
    value : '',
    helpText : 'All text areas can be formatted with <a href="http://daringfireball.net/projects/markdown/basics" target="_blank">Markdown</a>.  A live preview will appear to the right.',
    labelText : ''
});

WDD.helpText = Ember.View.extend({
    template : precompileTemplate('<span class="helpText">{{{view.value}}}</span>'),
    classNames : ['helpTextWrapper'],
    tagName : 'span',
    value : ''
});

/*global jQuery, animateLogo*/
WDD.Logo = Ember.View.extend({
    templateName : 'logo',
    classNames : ['logo'],
    classNameBindings : ['isDark:dark:'],
    isDark : false,
    tagName : 'div',
    runNum : 1,
    mouseEnter : function () {
        "use strict";
        animateLogo(this.$(), this.runNum);
    },
    didInsertElement : function () {
        "use strict";
        if (this.runNum < 0) {
            animateLogo(this.$(), this.runNum);
        }
    }
});


WDD.collapseToggle = Ember.View.extend({

    template : precompileTemplate('<div class="collapseToggle"><span></span></div>'),
    classNames : ['collapseToggleWrapper'],
    classNameBindings : ['isCollapsed:collapsed:'],
    isCollapsed : false,
    collapses : '',
    orgWidth : '',
    //direction : 'left',
	click : function(event){
				var	box = jQuery(event.target).parents( this.collapses ).eq(0),
					isCollapsed = this.isCollapsed;

				if (!this.orgWidth) {
                    this.set('orgWidth',box.width());
                }

				this.set('isCollapsed',!isCollapsed);
				box.animate({'width' : (isCollapsed ? this.orgWidth+'px' : '0')});
				
		}
});

WDD.searchInputField = Ember.View.extend({
		templateName		:	'searchInputField'
	,	name						:	''
	,	value						:	''
	,	matchesMultiple	:	false
	,	options					:	false
});

WDD.searchInput =	WDD.TextField.extend({
			attributeBindings	:	['value','data-0','data-75','onFocus','onBlur']
		,	value	:	''
		,	'data-0'	:	''
		,	'data-75'	:	''
		,	onFocus	:	"jQuery('#searchBox').parent().addClass('focused');"
		,	onBlur	:	"jQuery('#searchBox').parent().removeClass('focused');"
		,	placeholder : "SEARCH: Jobs, Portfolios, Clients..."
		,	autofocus  : "autofocus"
		,	keyUp	:	function(){  this.process( this.parser.parse(this.value));  }
	//	,	parser	:	 WDD.Search.create()
		,	process:	function(o){ console.log('processing',o);}
	
		});


/*
	Extended Form Fields that include validation checks
*/
WDD.validatedField = WDD.TextField.extend({
		focusNow				:	function(){}
	,	labelText				:	''
	,	helpText					:	false
	
	/*
		successText is displayed if the field is validated
		warningText is displayed if the field in currently unable to be validated
		errorText is displayed if the field is invalid
		
		IF DEFINED
			softText  is the message displayed to the user letting them know
			that their validation failed but that they can continue with potentially invalid data
			softRule is the rule that the value MUST pass in order to not be an error

	*/
	,	successText			:	''
	,	warningText			:	''
	,	errorText				:	''
	,	canContinueText	:	null
	,	canContinueRule	:	null
	
	,	dataType				:	''
		
		/*
			Validates value based on dataType
			throws Error : unknown dataType if unrecognized dataType
		*/
	,	valueObserver		:	function(){}
});





})();

(function() {

var get = Ember.get, set = Ember.set, EmberHandlebars = Ember.Handlebars;

EmberHandlebars.registerHelper('group', function(options) {
    var data = options.data,
        fn   = options.fn,
        view = data.view,
        childView;

    childView = view.createChildView(Ember._MetamorphView, {
        context: get(view, 'context'),

        template: function(context, options) {
            options.data.insideGroup = true;
            return fn(context, options);
        }
    });

    view.appendChild(childView);
});

})();

(function() {

(function () {
    "use strict";

    /**
     * Created by Chris Thoburn on 12/22/13.
     *
     * based on Aaron Haurwitz's work located here: http://aaron.haurwitz.com/#!/posts/growllike-notifications-with-emberjs
     */

    /*global Ember, WDD*/
    var precompileTemplate = Ember.Handlebars.compile;

    this.GrowlNotifications = Ember.CollectionView.extend({

        classNames: ['growlNotifications'],

        contentBinding: 'Nexus.Growl.notifications',

        attributeBindings: ['style'],

        showTime: 6000,

        /*
         @property {View} Notification view class
         Determines what view class to render for each item in the content array.
         */
        itemViewClass: Ember.View.extend({

            template: precompileTemplate('<span class="icon"></span><a class="closeNotification" {{action "close" target="view"}}>X</a><strong class="notificationTitle">{{view.content.title}}</strong><p class="notificationText">{{view.content.sub}}</p>'),

            classNameBindings: [":growlNotification", "content.type", "content.closed", "isOpaque"],

            attributeBindings: ['style'],

            timeoutId: null,

            isOpaque: false,

            init: function () {
                var fn;
                this._super();
                fn = (function () {
                    return this.notifyPropertyChange("style");
                }).bind(this);
                this.set("_recomputeStyle", fn);
                return Ember.$(window).bind("resize", fn);
            },

            didInsertElement: function () {

                var type = this.get('content.type'),
                    showTime = this.get("parentView.showTime");

                if (type !== 'loading') {
                    if (type.indexOf('loadCompleted') !== -1 ) {
                        showTime = showTime / 4;
                    }
                    this.set("timeoutId", setTimeout((function () {
                        return this.send("close");
                    }).bind(this), showTime));
                }

                //make the notification
                return Ember.run.later(this, (function () {
                    return this.set("isOpaque", true);
                }), 1);

            },

            complete : function () {
                this.set("timeoutId", setTimeout((function () {
                    return this.send("close");
                }).bind(this), this.get("parentView.showTime") / 4));
            }.observes('content.type'),

            willDestroyElement: function () {
                return Ember.$(window).unbind('resize', this.get('_recomputeStyle'));
            },

            style: (function () {
                var column, index, type, notifications, rightPx, row, topPx, unitHeight, unitWidth, unitsPerColumn, viewportHeight, isLoading;
                type = this.get('content.type');
                isLoading = (type === 'loading' || type.indexOf('loadCompleted') !== -1);
                notifications = this.get('parentView.content').rejectProperty('closed', true);
                index = notifications.indexOf(this.get('content'));
                viewportHeight = Ember.$(window).height();
                unitHeight = isLoading ? 2 : 6;
                unitWidth = 21.5;
                unitsPerColumn = Math.floor(viewportHeight / unitHeight);
                column = Math.floor(index / unitsPerColumn);
                row = index % unitsPerColumn;
                if (index === -1) {
                    return '';
                }
                topPx = row * unitHeight;
                rightPx = column * unitWidth;
                return 'top: ' + topPx + 'rem; right: ' + rightPx + 'rem;';
            }).property('parentView.content.@each.closed'),

            actions: {
                close: function () {
                    this.set('isOpaque', false);
                    return setTimeout((function () {
                        this.get('parentView.content').removeObject(this.get('content'));
                        return clearTimeout(this.get("timeoutId"));
                    }).bind(this), 300);
                }
            }
        })
    });

    Ember.Handlebars.helper('growl', this.GrowlNotifications);

    /**
     Responsible for getting told about new notifications and storing them
     within an array.
     */
    this.Growl = Ember.Object.create({

        notifications: Ember.A(),

        /*
         An exposed method for pushing new notification.
         @param title {String} leading text
         @param sub {String} supporting text
         @param type {String} classification; used for display type

         error (red),
         failure (orange),
         warning (yellow),
         info (blue),
         success (green),
         general (grey),
         loading (white),
         loaded (white)
         */

        push: function (title, sub, type) {
            var notif;
            type = type || 'general';
            notif = Ember.Object.create({
                title: title,
                sub: sub,
                type: type,
                closed: false,
                complete : function (message, status) {
                    this.set('title', message);
                    this.set('type', 'loadCompleted ' + status);
                }
            });
            return this.get('notifications').pushObject(notif);
        }

    });

}).call(WDD);

})();

(function() {

//markdown helper
/*global Showdown, Handlebars*/
Ember.Handlebars.helper('markdown', function (value) {

    "use strict";

    if (!value) { return ''; }

    var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});


})();

(function() {

/*global Ember, WDD*//*
(function () {
    "use strict";
*/
    /*global Ember, WDD*/
   /* var precompileTemplate = Ember.Handlebars.compile;

    this.ModalDialouges = Ember.CollectionView.extend({

        classNames: ['modalDialogues'],

        contentBinding: 'WDD.Modal.dialogues',

        attributeBindings: ['style'],

        /*
         @property {View} Notification view class
         Determines what view class to render for each item in the content array.
         *//*
        itemViewClass: Ember.View.extend({

            template: precompileTemplate('<span class="icon"></span><a class="closeDialogue" {{action "close" target="view"}}>X</a><strong class="dialogueTitle">{{view.content.title}}</strong><p class="dialogueText">{{view.content.sub}}</p>'),

            classNameBindings: [":modalDialogue", "content.type", "content.closed", "isOpaque"],

            attributeBindings: ['style'],

            timeoutId: null,

            isOpaque: false,

            init: function () {
                var fn;
                this._super();
                fn = (function () {
                    return this.notifyPropertyChange("style");
                }).bind(this);
                this.set("_recomputeStyle", fn);
                return Ember.$(window).bind("resize", fn);
            },

            didInsertElement: function () {

                var type = this.get('content.type'),
                    showTime = this.get("parentView.showTime");

                if (type !== 'loading') {
                    if (type.indexOf('loadCompleted') !== -1 ) {
                        showTime = showTime / 4;
                    }
                    this.set("timeoutId", setTimeout((function () {
                        return this.send("close");
                    }).bind(this), showTime));
                }

                //make the notification
                return Ember.run.later(this, (function () {
                    return this.set("isOpaque", true);
                }), 1);

            },

            complete : function () {
                this.set("timeoutId", setTimeout((function () {
                    return this.send("close");
                }).bind(this), this.get("parentView.showTime") / 4));
            }.observes('content.type'),

            willDestroyElement: function () {
                return Ember.$(window).unbind('resize', this.get('_recomputeStyle'));
            },

            style: (function () {
                var column, index, type, notifications, rightPx, row, topPx, unitHeight, unitWidth, unitsPerColumn, viewportHeight, isLoading;
                type = this.get('content.type');
                isLoading = (type === 'loading' || type.indexOf('loadCompleted') !== -1);
                notifications = this.get('parentView.content').rejectProperty('closed', true);
                index = notifications.indexOf(this.get('content'));
                viewportHeight = Ember.$(window).height();
                unitHeight = isLoading ? 2 : 6;
                unitWidth = 21.5;
                unitsPerColumn = Math.floor(viewportHeight / unitHeight);
                column = Math.floor(index / unitsPerColumn);
                row = index % unitsPerColumn;
                if (index === -1) {
                    return '';
                }
                topPx = row * unitHeight;
                rightPx = column * unitWidth;
                return 'top: ' + topPx + 'rem; right: ' + rightPx + 'rem;';
            }).property('parentView.content.@each.closed'),

            actions: {
                close: function () {
                    this.set('isOpaque', false);
                    return setTimeout((function () {
                        this.get('parentView.content').removeObject(this.get('content'));
                        return clearTimeout(this.get("timeoutId"));
                    }).bind(this), 300);
                }
            }
        })
    });

    Ember.Handlebars.helper('modal', this.ModalDialogues);

    this.Modal = Ember.Object.create({

        dialogues : Ember.A(),

        push: function (title, content, allowReject) {
            var dialogue;
            dialogue = Ember.Object.create({
                title: title,
                content: content,
                allowReject: allowReject,
                closed: false
            });
            return this.get('notifications').pushObject(dialogue);
        }

    });
}.call(WDD));*/

})();

(function() {

/*global Ember*/
var precompileTemplate = Ember.Handlebars.compile;

Ember.slideToggle = Ember.View.extend({

    classNames : ['slideToggle'],

    classNameBindings : ['value::off'],

    template : precompileTemplate('<div class="slideToggleButton"></div>'),

    value : false,

    click : function (event) {
        this.set('value', !this.get('value'));
    }
});

})();

(function() {

/*global Ember, Utils*/
(function () {
    "use strict";

    Ember.ValidatedTextField = Ember.TextField.extend({

        attributeBindings : ['autofocus'],
        autofocus : false,

        classNameBindings : ['dType'],

        keyPress : function (e) {
            var value = this.get('value'),
                charCode = e.which || e.keyCode,
                newChar = String.fromCharCode(charCode),
                fullString = value + newChar,
                shouldPreventDefault = false;

            if (!newChar && newChar !== 0) {
                return;
            }

            switch (this.get('dType')) {
            case 'integer':
                shouldPreventDefault = ! (/^[0-9]+$/).test(fullString);
                break;

            case 'currency-us':

            case 'float':
                shouldPreventDefault = ! (/^[0-9]+(\.[0-9]*)?$/).test(fullString);
                break;

            case 'credit-card':
            case 'phone-us':
            case 'date':
                break;
            default:
                break;
            }
            if (shouldPreventDefault) {
                e.preventDefault();
                e.stopImmediatePropagation();
                return false;
            }
            return true;
        },

        didInsertElement : function () {
            if (!!this.autofocus) {
                this.$().focus();
            }
        },
        init : function () {
            this._super();
            switch (this.get('dType')) {
            case 'date':
                this.set('type', 'date');
                break;
            default:
                this.set('type', 'text');
                break;
            }
        }
    });

}());

})();

(function() {

//signify we're done loading.  deferReadiness() is called in app.js
WDD.advanceReadiness();

})();