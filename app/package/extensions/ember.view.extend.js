
//signal the the APP is now loaded
//we do this at the beginning of the file
//because this is the last file
//and we need to bind the store first
/*global OYM, Ember*/
OYM.advanceReadiness();

var precompileTemplate = Ember.Handlebars.compile;

OYM.TextField = Ember.TextField.extend({
    attributeBindings : ['autofocus', 'name'],
    autofocus : false,
    didInsertElement : function () {
        "use strict";
        if (!!this.autofocus) {
            this.$().focus();
        }
    }

});

OYM.Checkbox = Ember.Checkbox.extend({
    attributeBindings : ['name']
});

OYM.liveNotes = Ember.View.extend({
    templateName : 'liveNotes',
    classNames : ['liveNotes'],
    tagName : 'div',
    name : '',
    value : '',
    helpText : 'All text areas can be formatted with <a href="http://daringfireball.net/projects/markdown/basics" target="_blank">Markdown</a>.  A live preview will appear to the right.',
    labelText : ''
});

OYM.helpText = Ember.View.extend({
    template : precompileTemplate('<span class="helpText">{{{view.value}}}</span>'),
    classNames : ['helpTextWrapper'],
    tagName : 'span',
    value : ''
});
