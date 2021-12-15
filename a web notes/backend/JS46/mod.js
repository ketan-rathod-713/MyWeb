console.log("this is custom module and");

function average(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// b = average([3,4]);
// console.log(b);
// i have made this two to just check this function and module 

module.exports ={
    avg : average,
    name : "harry",
    repo : "GitHub" //dont use equal sign here rather then use :
}


// module.exports is a object in itself