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