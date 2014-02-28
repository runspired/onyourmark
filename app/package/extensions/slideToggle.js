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