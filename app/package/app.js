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
require('extensions/utils');
require('webdevdaily');
require('router');
require('store');

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

require('models/*');
require('modules/*');
require('extensions/selectable');
require('extensions/*');

//signify we're done loading.  deferReadiness() is called in app.js
WDD.advanceReadiness();