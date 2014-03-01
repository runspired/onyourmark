/*global WDD*/
OYM.Router.map(function () {
    "use strict";

    this.route('session');
    this.resource('document', {path : '/'}, function () {
        this.route('single', { path : '/:document_id' });
    });

});