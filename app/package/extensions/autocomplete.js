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