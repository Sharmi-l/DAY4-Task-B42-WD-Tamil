

//Comparison:JSON have the same properties without order:

//METHOD1:

var obj1 = {
    name:"Person 1",
    age:5
};

var obj2 = {
    age: 5,
    name: "Person 1"
};


JSON.stringify(obj1);
JSON.stringify(obj2);
console.log(obj1);
console.log(obj2);

if(obj1 === obj2){
    console.log("true");
}

else{
    console.log("false");
}

// OUTPUT:
//           {name: 'Person 1', age: 5}
//           {age: 5, name: 'Person 1'}

//           false


/*.................................................................................................................................*/

//METHOD2:

var obj1 = {
    name:"Person 1",
    age:5
};

var obj2 = {
    age: 5,
    name: "Person 1"
};


  let myComparision = function(object1, object2) {
    JSON.stringify(object1);
    JSON.stringify(object2);
    let key1 = Object.keys(object1);
    let key2 = Object.keys(object2);

    if(key1.length !==key2.length){
        return false;
    };
    for (let key of key1){
        if(object1[key] !== object2[key]){
            return false;
        }
    }
    return true;
};
console.log(myComparision(obj1,obj2));

//OUTPUT:
//       true