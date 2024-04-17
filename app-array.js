

var words = ['cook', 'save', 'taste', 'aves', 'vase', 'state', 'map'];
console.log(anagrams(words));

// create anagrams from array
function anagrams(words) {
let anagrams = {};

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let keyword = generateKeyword(word);

    if (anagrams[keyword]) {
        anagrams[keyword][anagrams[keyword].length] = word;
    } else {
        anagrams[keyword] = [word];
    }
}

// converting results into array for anagrams
let result = [];
for (let keyword in anagrams) {
    result[result.length] = anagrams[keyword];
}

return result;
}

// generating keyword that unique for each anagrams
function generateKeyword(word) {
    let sortWord = '';
    for (let i = 0; i < word.length; i++) {
        let inserted = false;
        for (let j = 0; j < sortWord.length; j++) {
            if (word[i] < sortWord[j]) {
                sortWord = insertCharacter(sortWord, j, word[i]);
                inserted = true;
                break;
            }
        }
        if (!inserted) {
        sortWord += word[i];
        }
    }
    return sortWord;
}

// 
function insertCharacter(str, index, chara) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (i === index) {
            result += chara;
        }
    result += str[i];
    }
    if (index === str.length) {
        result += chara;
    }
    return result;
}


