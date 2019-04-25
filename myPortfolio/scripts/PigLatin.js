function convertToPigLatin(str) {
	var temp = str.toLowerCase();
	var vowels = ["a", "e", "i", "o", "u"];
	var len = str.length;
	var vowelPos = -1;
	for (var i = 0; i < len; i++) {
		var letter = temp[i];
		if (vowels.indexOf(letter) >= 0) {
			vowelPos = i;
			break;
		}
	}
	if (vowelPos === -1) {
		vowelPos = 0;
	}
	var suffix = "ay";
	var firstHalf = str.slice(0, vowelPos);
	var secondHalf = str.slice(vowelPos);
	suffix = firstHalf + suffix;
	return secondHalf + suffix;
}

console.log(convertToPigLatin("hilarious"));
