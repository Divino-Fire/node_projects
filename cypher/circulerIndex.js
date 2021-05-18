function correctIndex(index_, shift){  // make sure index lies between 0 and 25 when a shift is applied

			let index = index_ + shift;


			if (index > 25) index = index%26;
			else if (index < 0 && index > -26 ) index = 26 + index;
			else if (index < -25) {index = 26 + index%26; index = (index == 26)?0:index}
			return index;
}

// test correctIndex for proper functioning (it worked!)
console.log(correctIndex(25, -27));