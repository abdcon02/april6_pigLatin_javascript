var vowels = ["a", "e", "i", "o", "u"];

var pigLatin = function(input) {
    var results = input.split(" ");
    var final = [];

    results.forEach(function(result) {
        if ($.inArray(result[0], vowels) !== -1) {
            var new_input = result + "ay";
            final = final.concat(new_input);
        } else {
            var new_word = result + result[0] + "ay";
            new_word = new_word.slice(1);
            final = final.concat(new_word);
        }
    });
    return final.join(" ");
};
