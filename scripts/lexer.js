/* lexer.js  */
function lexer(sourceString)
{
    // Grab the "raw" source code.
    var sourceCode;
    var tokenStream = [];

    // Trim the leading and trailing spaces.
    sourceCode = trim(sourceString);

    // remove all spaces in the middle; remove line breaks too.
    //   note: with this simple approach, we won't be able to report the
    //         actual source position if any errors are found.
    //         Then again, even trim broke that capability.
    sourceCode = sourceCode.replace(/\s/g, "");
    // the above line makes trim 'redundant' but... for a less limited vocabulary,
    // deleting all white space like this would be a bad idea

    tokenStream = sourceCode.split("");
    // TODO: check for any invalid tokens (not in '0123456789-+')
    //       hint: steal some code from parse routine

    return tokenStream;
}

