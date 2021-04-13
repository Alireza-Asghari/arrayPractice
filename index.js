
/*********** first question ************/

function deleteByIndex (arr, index) {
    let remove = arr.splice(index,1);
    return arr;
}
let instance =[20,12,"reza","ali", {id:1, firstName: "Hossein", lastName:"Ahmadi"}];
let sample= deleteByIndex(instance,3);
console.log(sample);

/********* second question *******/

function combinationArray (arr_1, arr_2) {
    let newArray = arr_1.concat(arr_2);
    newArray.sort((a,b) => a-b);
    console.log(newArray);
}
let array1 = [1,8,5];
let array2 = [3,2,10];
combinationArray(array1,array2);

/********** third question ***********/

let array = [1,50,3,2,2,2,5];

obj ={};
for (let i = 0; i < array.length; i++){
  obj[array[i]] = false;
  
} 
let newArray = [];
for (var key in obj){
  newArray.push(key);
}
console.log(newArray);

/************ forth question *************/

function extraction(text) {
let numb = text.match(/\d/g);
numb = numb.join("");
console.log(numb);
}
let str= "dffd5vflf5v8v85v5"
extraction(str);

/*********** fifth question *************/

var oldArray = [1,30,["reza","ali"],[4,20,566], true];
var newArray = Array.prototype.concat.apply([], oldArray);
console.log(newArray);



