/**
 * @FILE util.js
 * Utility functions trim, rot13, logC, putMessage
 */

// using define() because there is nothing here we want executed immediately when loaded
// we have no dependencies, so just have function() with no parameters
define(function() {
"use strict";
// logC : either an alias for console.log() or a no-op that silences any messages logC is passed.
// from http://stackoverflow.com/questions/5133649/alias-to-chrome-console-log
var logC = console.log.bind(console);   // define alias util.logC() for console.log()
// var logC = function(){};             // swap comment/uncomment with prev to toggle console logging

logC("enter util.js define( no dependencies)");


function trim(str) {      // Use a regular expression to remove leading and trailing spaces.

	return str.replace(/^\s+ | \s+$/g, "");
	/*
	Huh?  Take a breath.  Here we go:
	- The "|" separates this into two expressions, as in A or B.
	- "^\s+" matches a sequence of one or more whitespace characters at the beginning of a string.
    - "\s+$" is the same thing, but at the end of the string.
    - "g" makes is global, so we get all the whitespace.
    - "" is nothing, which is what we replace the whitespace with.
	*/

}


function rot13(str) {   // An easy-to understand implementation of the famous and common Rot13 obfuscator.
                        // You can do this in three lines with a complex regular expression, but I'd have
    var retVal = "";    // trouble explaining it in the future.  There's a lot to be said for obvious code.

    var strLen = str.length;
    /* for (var ii in str) */  // should have hasOwnProperty check, so just use index.
    for (var ii = 0; ii < strLen; ++ii)
    {
        var ch = str.charAt(ii);
        var code = 0;
        if ("abcedfghijklmABCDEFGHIJKLM".indexOf(ch) >= 0)
        {
            code = str.charCodeAt(ii) + 13;  // It's okay to use 13.  It's not a magic number, it's called rot13.
            retVal = retVal + String.fromCharCode(code);
        }
        else if ("nopqrstuvwxyzNOPQRSTUVWXYZ".indexOf(ch) >= 0)
        {
            code = str.charCodeAt(ii) - 13;  // It's okay to use 13.  See above.
            retVal = retVal + String.fromCharCode(code);
        }
        else
        {
            retVal = retVal + ch;
        }
    }
    return retVal;
}

    var messageAreaID;
    var messageAreaHandle;
    function putMessage(msgString) {
        if ('undefined' === typeof messageAreaHandle) {
            alert("messageArea has not been initialized.  Call setMessageTextArea(id) first");
        } else {
            messageAreaHandle.value += msgString + "\n";
        }
        logC(msgString);
    }


    function setMessageTextArea(taIdString) {
        messageAreaID = taIdString;
        messageAreaHandle   = document.getElementById(taIdString);
    }

    logC("leave util.js define( no dependencies), returning function references FIRST");
    return { trim: trim, rot13: rot13, logC: logC, setMessageTextArea: setMessageTextArea, putMessage: putMessage };

}); // closure for requirejs define()
