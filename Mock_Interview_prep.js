// THREE PROBLEMS MOCK INTERVIEW

//1
/*
input = [['Jeroen','Timmermans',23,'san francisco'],['Sam','Norton',23,'los angeles'],['Muhammad','Meigooni',31,'new york']]
expected = renderInfoList(input) =
[{name: {first: 'Jeroen',last: 'Timmermans'},age: 23,campus: SF},
{name:{first: 'Sam',last: 'Norton'},age: 23,campus: LA},
{name:{first:'Muhammad',last:'Meigooni'},age:31,campus:NY}]

Note: You can assume that campus name consists of two words separated by a Space
*/

/*var renderInfoList = function(){

}*/

var renderInfoList = function (input){
  return input.map(function(person){
    return {name: {first: person[0],last: person[1]},age:person[2],campus:abbreviateCampus(person[3])}
  });
}

var abbreviateCampus = function(city){
  words = city.split(' ');
  firstchar = words[0][0].toUpperCase();
  secondchar = words[1][0].toUpperCase();
  return firstchar+secondchar;
}

//2

/*
Given a list of salesmen, build a function that returns an object with a keys for each unique age and the average sales for that age as the value.

input = salesTeam(see below)

expected = renderAgesObject(salesTeam) = {17: "$9828.5", 19: "$11997", 22: "$7126", 24: "$8848", 26: "$5069", 46: "$7238", 53: "$7525.75", 54: "$3358.5", 55: "$8868"}

You can do a unit test if you want!
*/

/*var renderAgesObject(){

};
*/

var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
 		{name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
 		{name: {first: 'Denese', last: 'Dossett'}, age: 26, sales: '$9248'},
 		{name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
 		{name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
 		{name: {first: 'Herman', last: 'Hazell'}, age: 26, sales: '$2746'},
 		{name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
 		{name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
 		{name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
 		{name: {first: 'Issac', last: 'Ingerson'}, age: 46, sales: '$5225'},
 		{name: {first: 'Jeraldine', last: 'Joplin'}, age: 46, sales: '$2891'},
 		{name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
 		{name: {first: 'Joleen', last: 'Jolin'}, age: 55, sales: '$15736'},
 		{name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
 		{name: {first: 'Magda', last: 'Mireles'}, age: 54, sales: '$1498'},
 		{name: {first: 'Mistie', last: 'Montealegre'}, age: 26, sales: '$6920'},
 		{name: {first: 'Nancy', last: 'Napoli'}, age: 17, sales: '$5255'},
 		{name: {first: 'Regine', last: 'Rohrbaugh'}, age: 53, sales: '$7881'},
 		{name: {first: 'Rolando', last: 'Riebel'}, age: 19, sales: '$8573'},
 		{name: {first: 'Scarlett', last: 'Stagg'}, age: 22, sales: '$7126'},
 		{name: {first: 'Sherron', last: 'Strawn'}, age: 24, sales: '$8848'},
 		{name: {first: 'Susan', last: 'Shilling'}, age: 19, sales: '$8542'},
 		{name: {first: 'Tama', last: 'Tworek'}, age: 55, sales: '$9200'},
 		{name: {first: 'Tonisha', last: 'Taunton'}, age: 54, sales: '$5219'},
 		{name: {first: 'Vergie', last: 'Villescas'}, age: 26, sales: '$8712'}];

var renderAgesObject = function(salesTeam) {
  var listOfAges = salesTeam.map(function(person) {
    return person.age
  });
  var obj = {};
  for (var i = 0; i < listOfAges.length; i++) {
    if (!obj.hasOwnProperty(listOfAges[i])) {
      obj[listOfAges[i]] = '$' + findAverageSalaryPerAge(salesTeam, listOfAges[i]).toString()
    }
  }
  return obj;
};

var findAverageSalaryPerAge = function(salesTeam, age) {
  var filteredByAge = salesTeam.filter(function(person) {
    return person.age === age
  })

  var totalSalesPerAge = filteredByAge.reduce(function(acc, curr) {
    acc += parseInt(curr.sales.slice(1))
    return acc
  }, 0);

  return totalSalesPerAge / filteredByAge.length
};

function assertObjectsAreEqual(actual,expected,testName){
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected){
    console.log('Passed')
  }else{
    console.log('FAILED '+testName+': Expected '+expected + ' but got, '+actual)
  }
}

//3

/*
Write a function that given a whole number, return whether the number is prime or not.
A Prime Number can be divided evenly only by 1, or itself AND is not equal to 1.
Examples:
input = 3
expected = isPrime(input) = true
input = 6
expected = isPrime(input)=false
input = 1
expected = isPrime(input)= false
*/

/*var isPrime = function(){

};*/

var isPrime = function(value){
  for (var i=2;i<value;i++){
    if (value%i===0){
      return false
    }
  }
  return value>1
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Note: DO NOT FORGET TO WRITE ASSERTION FOR EACH ITEM AND SEE IF EACH ITEM IS PASSING

// Part 1

/* Write a function, tenThousandSalesMen, that takes in an array of information, salesTeam,
and returns an array that lists the full names of each member of the sales team that is has sales greater than $10,000.
Make sure the first and last names are separated by a space. */

//input: array of objects
//output: array of just names


var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
 		{name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
 		{name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: '$9248'},
 		{name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
 		{name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
 		{name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: '$2746'},
 		{name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
 		{name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
 		{name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
 		{name: {first: 'Issac', last: 'Ingerson'}, age: 45, sales: '$5225'},
 		{name: {first: 'Jeraldine', last: 'Joplin'}, age: 39, sales: '$2891'},
 		{name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
 		{name: {first: 'Joleen', last: 'Jolin'}, age: 45, sales: '$15736'},
 		{name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
 		{name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
 		{name: {first: 'Mistie', last: 'Montealegre'}, age: 31, sales: '$6920'},
 		{name: {first: 'Nancy', last: 'Napoli'}, age: 49, sales: '$5255'},
 		{name: {first: 'Regine', last: 'Rohrbaugh'}, age: 33, sales: '$7881'},
 		{name: {first: 'Rolando', last: 'Riebel'}, age: 35, sales: '$8573'},
 		{name: {first: 'Scarlett', last: 'Stagg'}, age: 36, sales: '$7126'},
 		{name: {first: 'Sherron', last: 'Strawn'}, age: 36, sales: '$8848'},
 		{name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
 		{name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},
 		{name: {first: 'Tonisha', last: 'Taunton'}, age: 41, sales: '$5219'},
 		{name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}];

function tenThousandSalesMen(salesTeam) {
  //filter the salesTeam by people that make more than 10,000
  //do some adaptions to sales amount in order to convert to a number that can be checked against 10,000
  //--> create helper function to reformat the sales amount
  //transform our filtered array to an array of names only (with map)

return salesTeam.filter(function(person){
  return (reFormatSales(person.sales)>10000)
}).map(function(person){
  return produceName(person)
})

}

function reFormatSales(string){
  return Number(string.slice(1));
}

function produceName(personobject){
  return personobject.name.first + ' '+personobject.name.last
}

// Part 2

/* Using what you've learned with Underbar, rewrite the each function from scratch and use it to recreate map and then use map to recreate pluck function */

var each = function(collection, iterator) {
    // Your code here
    if (Array.isArray(collection)){
      for (var i=0;i<collection.length;i++){
        iterator(collection[i],i,collection);
      }
    }else{
      for (var key in collection){
        iterator(collection[key],key,collection);
      }
    }
  };

var filterOnlyEvens = function(numbers){
answer = [];
each(numbers,function(number){
  if (number%2===0){
    answer.push(number)
  }
})
return answer
}

 var map = function(collection, iterator) {
   // Your code here
   array = [];
   each(collection,function(element){
     array.push(iterator(element))
   })
   return array
  };

  var pluck = function(collection, key) {
   // Your code here
  return  map(collection,function(item){
     return item[key]
   })
  };



var stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
pluck(stooges, 'name');
=> ["moe", "larry", "curly"]

// Part 3


/* Using the function countingAnagrams(str) take the str parameter and determine how many anagrams exist in the string. An anagram is a
new word that is produced from rearranging the characters in a different word, for example: cars and arcs are anagrams.
Your program should determine how many anagrams exist in a given string and return the total number. */

/* For example: if str is "cars are very cool so are arcs and my os" then your program should return 2 because "cars" and "arcs" form 1 anagram and "so" and "os" form a 2nd anagram. The word "are" occurs twice in the string but it isn't an anagram because it is the same word just repeated. The string will contain only spaces and lowercase letters, no punctuation, numbers, or uppercase letters. */

//input = string
//output = number that represents the anagrams(two words!)

function countingAnagrams(str) {
  // Your code here
  counter = 0;
  words = str.split(' ')
  console.log(words)
  for (var i = 0; i < words.length; i++) {
    for (var j=0;j<words.length;j++){
        if (words[i]!==words[j] && isAnagram(words[i],words[j])){
          console.log(isAnagram(words[i],words[j]))
        counter++
      }
      }
      return counter
    }
}

var isAnagram = function(word1, word2) {

  if (word1.length === word2.length && word1 !==word2) {
    for (var i = 0; i < word2.length; i++) {
      if (word1.indexOf(word2[i]) !== -1) {
        return true
      }
    }
  }
  return false
}
