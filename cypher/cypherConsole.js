// use this to make your make and cipher and decipher your desired text 
// open cmd or terminal and navigate to where this file is stored
// > node cypherConsole this is my text to decipher 4;
// the above line will result to :: xlmw mw qc xibx xs higmtliv
// it will shift each letter to the right of the alphabet by 4, to decipher shift back using -4
// > node cypherConsole xlmw mw qc xibx xs higmtliv -4
// the above line will result to :: this is my text to decipher



// you can modify this code to take in a "string in quotes" argument and the shift value outside of the quotes if you perfer...
//...it that way

function cypher(text, shift){ // is a number between 0 and 25 and text is the text you wish to decipher.
	function correctIndex(index_, shift){  // make sure index lies between 0 and 25 when a shift is applied

			let index = index_ + shift;


			if (index > 25) index = index%26;
			else if (index < 0 && index > -26 ) index = 26 + index;
			else if (index < -25) {index = 26 + index%26; index = (index == 26)?0:index}
			return index;
}


	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let alphabet_caps = alphabet.toUpperCase();

	let new_text = '';
	let new_letter = '';
	let new_index ;

	for (letter in text) {
		let old_index = alphabet.indexOf(text[letter]);

		if (old_index>=0){

			new_index = correctIndex(old_index, shift); // get the new index of our letter
			new_letter = alphabet[new_index];
			new_text += new_letter;  // append new letter to our new cyphied text

		}
		else { // if letter doesn't exist in alphabet, leave the letter unchanged.

			new_text += text[letter];
		}		

	}	

	return new_text;
}


// code to take command line arguments

let word_array = process.argv.slice(2); // create a new array starting from the 3th element of argv
let shift = 0;


shift = parseInt(word_array[0]); // get the last element which should be a number
if (String(shift) === 'NaN') shift = 0;  // if there is no last element, reset shift to 0;
else word_array.shift();// remove shift number from words array

let text_to_be_cyphered = "";

for (word in word_array){
	if (word == 0) text_to_be_cyphered += word_array[word];
	else text_to_be_cyphered += ` ${word_array[word]}`;
}

let consoleOut =  cypher(text_to_be_cyphered, shift);
console.log(consoleOut);

// ---- code ends here -----

function log(s, value){ // function to be used for debugging purposes only

	console.log(`${s} : ${value}`);

}