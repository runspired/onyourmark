//markdown helper
/*global Showdown, Handlebars*/
Ember.Handlebars.helper('markdown', function (value) {

    "use strict";

    if (!value) { return ''; }

    var converter = new Showdown.converter();
    return new Handlebars.SafeString(converter.makeHtml(value));
});
