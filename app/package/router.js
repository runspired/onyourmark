/*global WDD*/
WDD.Router.map(function () {
    "use strict";

    this.route('session');
    this.resource('stream', {path : '/'}, function () {
        this.route('single', { path : '/:stream_id' });
    });

});