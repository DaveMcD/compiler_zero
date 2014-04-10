/**
 * @FILE webPageInterface.js
 * this code factored out of HTML file.
 */

// using require() because there is something(init) we want executed immediately when loaded
require(['util', 'lexer', 'parse'], function(util, lexer, parse) {
// use above, if not using deferred loading of lexer
// use below, if using deferred loading of lexer
// require(['require', 'util', 'parse'], function(require, util, parse) {
// require(['require', 'util', 'parse'], function(requireParam, util, parse) {
"use strict";

// Global variables
// var errorCount = 0;

var logC = util.logC;                   // take the default from util
//  logC = function(){};                // to silence console logging
//  logC = console.log.bind(console);   // to restore console logging

logC("enter webPageInterface/require(require, util, parse(, lexer)), at top FOURTH");


function init()
{
    logC("in webPageInterface/init SIXTH");
    document.getElementById("btnCompile").onclick = btnCompile_click;
    logC("in webPageInterface/init, assigned onclick... } SEVENTH");
    util.setMessageTextArea("taOutput");
}


function resetCompilation() {
    // Clear the message box.
    document.getElementById("taOutput").value = "";
    // Set the initial values for our globals.
//    errorCount = 0;
}


function btnCompile_click()
{
    var tokenSequence;
    // This is executed as a result of the usr pressing the
    // "compile" button between the two text areas, above.
    // Note the <input> element's event handler: onclick="btnCompile_click();
    // Note that btnCompile_click is now assigned in init()
    resetCompilation();

    util.putMessage("Compilation Started");

    // NOTE: there is no good reason to use delayed loading here, but...
    //      if this was a time consuming function, not always executed
    //      it might be worthwhile to do so (say, for example if compiling a compiler)
    // This method results in out of order execution, so in this example,
    // we want parse to also be inside the requireParam closure.
    if ('undefined' === typeof lexer) {
        // lexer undefined, so we need to load it now (and call it lexerParam).
        /* var lexerVar = */
        // requireParam(["lexer"], function (lexerParam) {
        require(["lexer"], function (lexerParam) {
            //// Error: Module name "2+3" has not been loaded yet for context: (if calling lexerVar)
            //// tokenSequence = lexerVar("2+3");
            logC("in webPageInterface reqP(lex).  calling lexerParam() TENTH!!!");
            tokenSequence = lexerParam(document.getElementById("taSourceCode").value);
            // logC("in webPageInterface reqP(lex).  after lexerParam() TENTH+!!!");
            logC("Late Lex returned [" + tokenSequence + "]");
            util.putMessage("Late Lex returned [" + tokenSequence + "]");

            // . . . and parse!
            parse(tokenSequence);  // for now, pass putMessage function to parse.
        });

        //// Error: Module name "1+2" has not been loaded yet for context: (if calling lexerVar)
        //// tokenSequence = lexerVar(document.getElementById("taSourceCode").value);
        //// Error: lexerParam is not defined: (if calling lexerParam)
        //// tokenSequence = lexerParam(document.getElementById("taSourceCode").value);
    } else {
        // lexer is defined, so we do not need to load it now.
        logC("in webPageInterface using outer req(lex).  calling lexer() NINTH");
        // Grab the tokens from the lexer . . .
        tokenSequence = lexer(document.getElementById("taSourceCode").value);
        util.putMessage("Lex returned [" + tokenSequence + "]");

        // . . . and parse!
        parse(tokenSequence);
        // util.putMessage("rot13 of aNzM is [" + util.rot13("aNzM") + "]");
    }
} /* end btnCompile_click */


// return init;
logC("leave webPageInterface/require(), before calling our own init() FIFTH");
init();
});