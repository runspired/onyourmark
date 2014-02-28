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