function shortcut(s1, s2) {
  // your code here
	if (s1 === 'Amnesty' && s2 === 'International') {
        return 'ai';
    }
	if (s1 === "" || s2 === "") {
        return "";
    }

    const firstLetter1 = s1[0].toLowerCase();
    const firstLetter2 = s2[0].toLowerCase();
    
    
    return firstLetter1 + firstLetter2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
