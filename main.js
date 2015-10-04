
// Q1
// Write a function called `sum` that takes two
// parameters and returns the sum of those 2 numbers.
(function(){
var one = document.getElementById('one');
var sum = function(num1,num2) {
    return num1 + num2;
}
var answer = sum(5,5);
one.innerHTML = answer;

})();
// Q2
// Write a function named `avg` that takes 3 parameters
// and returns the average of those 3 numbers.
(function(){
var two = document.getElementById('two')
var avg = function(num1,num2,num3) {
    var total = num1 + num2 + num3;
    return total / 3;
};
var answer = avg(5,5,5);
two.innerHTML = answer;
})();

// Q3
// Write a function called `getLength` that takes one
// parameter (a string) and returns the length

(function(){
var three = document.getElementById('three');
var getLength = function(string) {
    return string.length;
}
var answer = getLength('Practice makes perfect.');
three.innerHTML = answer;
})();

// Q4
// Write a function called `greaterThan` that takes
// two parameters and returns `true` if the second
// parameter is greater than the first. Otherwise
// the function should return `false`.
(function(){
var four = document.getElementById('four');
var greaterThan = function(a,b) {
    if(a < b){
        return true;
    } else {
        return false;
    }
};
var answer = greaterThan(3,9);
four.innerHTML = answer;
})();

// Q5
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
(function(){
var five = document.getElementById('five');
var greet = function(name){
    return 'Hello, ' +name+"!";
};
var answer = greet('Jesse');
five.innerHTML = answer;
})();
// Q6
// Write a function called `madlib` that takes
// 4 or more parameters (words). The function 
// should insert the words into a pre-defined
// sentence. Finally the function should return
// that sentence.
// Note: When I say words and sentence I mean
// strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
(function(){
var six = document.getElementById('six');
var madlib = function(adverb,adjective1,noun,adjective2){
    return 'The '+adverb+' '+adjective1+' '+noun+' is '+adjective2+'.';
}
var answer = madlib('very','fat','cat','sad');
six.innerHTML = answer;
})();
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------
(function(){
var seven = document.getElementById('seven');
function max(num1,num2){
    return Math.max(num1,num2);
}
var answer = max(9,4);
seven.innerHTML = answer;
})();
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------
(function(){
var eight = document.getElementById('eight'); 
function maxOfThree(num1,num2,num3){
    return Math.max(num1,num2,num3);
}
var answer = maxOfThree(5,32,22);
eight.innerHTML = answer;
})();
// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------
(function(char){
var nine = document.getElementById('nine');
function isVowel(char){
    var vowels ='aeiou';
    if(vowels.indexOf(char) !== -1){
        return true;
    } else {
        return false;
    }
}
var answer = isVowel('a');
nine.innerHTML = answer;
})();

// ---------------------
// Write a function translate() that will translate a text into "rÃ¶varsprÃ¥ket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
(function(){
var ten = document.getElementById('ten');

function rovarspraket(phrase){
    var characters = phrase.split('');
    var array = [];
    var vowels = 'aeiou';
    
    characters.forEach(function(char){
        
        if (vowels.indexOf(char) === -1 && char !== " " && char !== ".") {
            array.push(char+"o"+char);
        }
        else {
            array.push(char);
        }

    }) //end of forEach
     var finalArray = array.join('');
    return finalArray;
}// end of rovarspraket function

var answer = rovarspraket('This is not as hard as last time.');
ten.innerHTML = answer;
})();
// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------
(function(){
var eleven = document.getElementById('eleven');
function reverse(string){
    return string.split().reverse().join();
}
var answer = reverse('Reverse me please!')
eleven.innerHTML = answer;
})();
// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------
(function(){
var twelve = document.getElementById('twelve');
function findLongestWord(words){
   var longWord = words.reduce(function(word1,word2){
        if(word1.length > word2.length) {
            return word1;
        }//end of if
        else 
            return word2;
    })//end of filter
   return longWord.length;
}//end of findLongestWord
answer = findLongestWord(['cat','tiger','horse','elephant','bird']);
twelve.innerHTML = answer;
})();
// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------
(function(){
var thirteen = document.getElementById('thirteen');

function filterLongWords(words, i){
    var filtered = words.filter(function(word){
           return word.length > 5;
    }); //end of filter
   return filtered; 
}//end of filterLongWords

var answer = filterLongWords(['dog','snake','shark','elephant','buffalo'],5);
thirteen.innerHTML = answer;
})();
// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------
(function(){ 
 var fourteen = document.getElementById('fourteen');
    var container = {};
function charFreq(string){
    var letters = string.split('').sort('');
        letters.map(function(letter){
            if(letter in container) {
                container[letter] +=1;
            } //end of if
             else {
                container[letter] = 1;
            } //end of else
        });//end of map
        console.dir(container);
         return container;
}//end of charFreq
var answer = charFreq('abbabcbdbabdbdb');
fourteen.innerHTML = container;

})();
// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------




// ---------------------------
// 2. Find longest string
// ---------------------------




// ---------------------------
// 3. Find even numbers
// ---------------------------



// ---------------------------
// 4. Find odd numbers
// ---------------------------


// ---------------------------
// 5. Find words that contain `is`
// ---------------------------



// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------




// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------