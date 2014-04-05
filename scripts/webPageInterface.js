// this code factored out of HTML file.

// Global variables
var tokens = "";
var tokenSequence = [];
var tokenIndex = 0;
var currentToken = "";
var errorCount = 0;
var EOF = "$";

function init()
{
    // Clear the message box.
    document.getElementById("taOutput").value = "";
    // Set the initial values for our globals.
    tokens = "";
    tokenIndex = 0;
    currentToken = ' ';
    errorCount = 0;
}

function btnCompile_click()
{
    // This is executed as a result of the usr pressing the
    // "compile" button between the two text areas, above.
    // Note the <input> element's event handler: onclick="btnCompile_click();
    init();
    putMessage("Compilation Started");
    // Grab the tokens from the lexer . . .
    tokenSequence = lexer(document.getElementById("taSourceCode").value);
    putMessage("Lex returned [" + tokenSequence + "]");
    // . . . and parse!
    parse(tokenSequence);
}

function putMessage(msg)
{
    document.getElementById("taOutput").value += msg + "\n";
}
