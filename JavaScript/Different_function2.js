var cont ="Ganesh";
var convetedtostring =cont.replace('n','n');//Replacing the specific Element to the other element 
console.log(cont.split(''));//after spliting the string output shown in the Array
console.log(cont.split('n'));//spliting the string from the element 'n'
console.log(convetedtostring.toString());//Array converting into the string
console.log(convetedtostring.toLocaleLowerCase());//string converting into the LowerCase using toLocaleLowerCase
console.log(convetedtostring.toLowerCase());//string converting into the LowerCase using toLowerCase
console.log(convetedtostring.toLocaleUpperCase());//string converting into the UpperCase using toUpperLowerCase
console.log(convetedtostring.toUpperCase());//string converting into the UpperCase using toUpperCase
var str1="It is a topmost secret in the universe";
var matchtext = str1.match('secret');//Match the string using the match()
// var matchtext = str1.matchAll();//Match the string the using the matchAll()
console.log(matchtext);
var array=[1,2,5,8,9,5];
delete array[3];//Deleting the Specific Element in the Array 
console.log(array);
array.length=0;//Empty the Whole Array
console.log(array);
var num1=[0,1,2,3,4];
var num2=[5,6,7,8,9];
var mergedArray = num1.concat(num2);//Concating the two different string
console.log(mergedArray);

num1.splice


