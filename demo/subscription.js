"use strict";

// subscription.js

var Event = (function() {
    var c = [],
        listen,
        trigger,
        remove;

    listen = function(k, f) {
        if (!c[k]) {
            c[k] = [];
        }
        c[k].push(f);
    };

    trigger = function() {
        var k = arguments[0],
            fns = c[k],
            p = [].slice.call(arguments, 1);

        if (fns) {
            for (var i = 0, fn; fn = fns[i++];) {
                fn.apply(this, p);
            }
        }
        else {
            return false;
        }
    };

    remove = function(key, fn) {
        var fns = c[key];

        if (!fns) {
            return false;
        }

        if (!fn) {
            fns && (fns.length = 0);
        }
        else {
            for (var i = 0; i < fns.length; i++) {
                var _fn = fns[i];

                if (_fn === fn) {
                    fns.splice(i, 1);
                }
            }
        }
    };

    return {
        listen,
        trigger,
        remove
    };
})();

module.exports = {
    listen: Event.listen,
    trigger: Event.trigger,
    remove: Event.remove
};