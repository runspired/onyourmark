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