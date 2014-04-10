/**
 * @FILE main.js
 */

require.config({
    paths: {
        // specify a path to util(.js)
        // if we move the util.js file to a different directory,
        //    we only need to change that path here, rather than in source code
        //    for every module that depends on util
        // NOTE: a require/define dependency of ['lib/util'] will fail when we have it here
        util: 'lib/util'
        // so, if util.js is moved to path lib/secret, dependent modules can still
        // find it if we do this instead:
        // util: 'lib/secret/util'
    }
});

require(["webPageInterface"], function (webPageInterface) {
    "use strict";
    // also defined via util.logC
    var logC = console.log.bind(console);
    // logC("in main.js, we use define instead of require (and still run before anything in webPageInterface) ZEROTH");
    logC("in main.js, we require webPageInterface (but still run before anything in webPageInterface) ZEROTH");

    // logC = function(){};   // to silence console logging
    // logC("a" + "b" + "c", "def", {a:1, b:2, c:3});
    // if ('undefined' === typeof webPageInterface) { logC("wPI undefined"); }
    // else { logC("wPI defined"); }

    // webPageInterface is still undefined, so we cannot call its init() function.
    // probably because webPageInterface does not return itself.
    // it isn't clear exactly _what_ webPageInterface would return anyway
    // - perhaps an enclosing anonymous function?
    // In any case, things still seem to work OK without calling init,
    // - probably because the last thing webPageInterface does is call init()
    //// webPageInterface.init();
});