//Finding the last item in the array
let arr1 = [3,7,34,90,12];
console.log("last item",arr1[arr1.length-1]);

let arr2 = [true,"green","where",12,56];
console.log("last item", arr2[arr2.length-1]);

//joining elements in array into string
let myPets = ["Cow","Bird","Snake","Dog"];
let newPets = myPets.toString();
console.log({newPets});

//sorting array items
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
let newArr3 = arr3.sort();
console.log({newArr3});

//Removing duplicates from a given array
let arr = ["boy","man","girl","school","girl","woman"];
function removeDuplicate(arr){
    return {...new Set (arr)};
    console.log(removeDuplicate(arr));
}

//searching  word "food" in a given array if is present return it, otherwise return the word does not found
let arr5 = ["the","way","x",4];
let search=arr5.includes("food");
if(search==true){
    console.log(true);
}
else{
    console.log("the search word was not found");
}


//sorting strings
let word= "renniw"
let array1=word.split();
console.log(array1);

let t = array1.sort();
console.log(t);

 let string = array1.toString();
 console.log(string);
