/*global WDD*/
OYM.Router.map(function () {
    "use strict";

    this.route('session', {path : '/login'});
    this.route('welcome', {path : '/'});
    this.resource('document', {path : '/documents'}, function () {
        this.route('single', { path : '/:document_id' });
    });

});