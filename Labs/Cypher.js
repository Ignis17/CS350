function encrypt(str, N) {

    if (N < 0){
        return encrypt(str, N + 26);
    }

    var result = '';
    var Plain = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    
    for (var i = 0; i < str.length; i ++) {
        var index = Plain.indexOf(str[i]);
        result = Plain[index];
    }
    return result;
}