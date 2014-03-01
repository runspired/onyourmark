/*
 -----------[ REST / Ember-data Configuration ]-----------
 */

/*global DS, OYM, require, Ember */

//OYM.ApplicationSerializer = DS.RESTSerializer.extend({});

OYM.ApplicationAdapter = DS.FirebaseAdapter.extend({
    firebase: new Firebase("https://onyourmark.firebaseio.com/")
});

OYM.ApplicationAdapter.reopen({});