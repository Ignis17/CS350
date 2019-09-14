function encrypt(str, N) {

    // Wrap the amount
    if (N < 0){
        return encrypt(str, N + 26);
    }

    var result = '';
    
    for (var i = 0; i < str.length; i ++) {

        // Get the character we'll be appending
        var c = str[i];
        // If it's a letter...
		if (c.match(/[a-z]/i)) {
            // Get its code
            var code = str.charCodeAt(i);
            
            // Get the character we'll be appending
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + N) % 26) + 65);
            }
        result += c;
    }
    return result;
}
 const word = process.argv[2];
 const num = parseInt(process.argv[3]);
 console.log(encrypt(word,num));
