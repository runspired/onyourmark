
var Utils = window.Utils = {};

Utils.cookie = {

    get : function (name) {
        "use strict";
        var cookies = document.cookie.split(";"),
            index = cookies.length,
            cookieName,
            cookieBody;

        while (index--) {
            cookieName = cookies[index].substr(0, cookies[index].indexOf("="));
            cookieBody = cookies[index].substr(cookies[index].indexOf("=") + 1);
            cookieName = cookieName.replace(/^\s+|\s+$/g, "");
            if (cookieName === name) {
                return decodeURI(cookieBody);
            }
        }

        return false;
    },

    set : function (name, value, expires) {
        "use strict";
        var date = new Date();
        date.setDate(date.getDate() + expires);
        document.cookie = name + "=" + encodeURI(value) + ((expires === null) ? "" : "; expires=" + date.toUTCString());
    },

    del : function (name) {
        "use strict";
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
};

Utils.array = {

    inArray : function (a, v) {
        "use strict";
        return !!~a.indexOf(v);
    }

};

Utils.string = {

    capFirstLetter : function (s) {
        "use strict";
        return s.charAt(0).toUpperCase() + s.slice(1);
    },

    pluralize : function (s) {
        "use strict";
        var plural = s;
        if (plural.slice(-1) === 'y') {
            plural = plural.slice(0, -1) + 'ies';
        } else if (plural.slice(-1) === 's' && plural.slice(-2) !== 'es') {
            plural = plural.slice(0, -1) + 'es';
        } else {
            plural = plural + 's';
        }

        return plural;
    },

    underscoreToWords : function (s) {
        "use strict";
        return s.replace(/_/g, ' ');
    },

    capitalizeWords : function (sentence) {
        "use strict";
        return sentence.split(' ')
            .map(function (word) {
                return Utils.string.capFirstLetter(word);
            })
            .join(' ');
    }
};

Utils.animate = {

    Interval : function (callback, time) {
        "use strict";
        var delay = time ? parseInt(time, 10) : 0,

        //stores the time of last callback execution for
        // play/pause behavior and firefox shunt
            lastExecution = (new Date()).getTime(),

            timeout = false,

        //execute the callback and setup the next one
            once = function () {
                callback();
                timeout = setTimeout(
                    (function () { once(); }),
                    delay
                );
            },

        //shunt for firefox, which executes setTimeout
        // up to 50% early
            checkExecution = function () {
                var time = (new Date()).getTime() - lastExecution;
                if (time >= delay) {
                    return true;
                }
                timeout = setTimeout(
                    (function () {once(); }),
                    time
                );
                return false;
            },

        //stores the amount of time elapsed prior to a pause
            timeElapsed = 0;

        //initiate the callback loop
        timeout = setTimeout(
            (function () {once(); }),
            delay
        );

        Object.defineProperty(
            this,
            'delay',
            {
                get : function () { return delay; },
                set : function (v) { delay = parseInt(v, 10); }
            }
        );

        this.reset = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = 0;
                lastExecution = (new Date()).getTime();
                timeout = setTimeout( (function () { once(); }), delay);
            }
        };

        this.pause = function () {
            if (timeout !== false) {
                clearTimeout(timeout);
                timeout = false;
                timeElapsed = (new Date()).getTime() - lastExecution;
            }
        };

        this.play = function () {
            lastExecution = (new Date()).getTime() - timeElapsed;
            timeout = setTimeout( (function () { once(); }), Math.max(0, delay - timeElapsed));
            timeElapsed = 0;
        };

    }

};
