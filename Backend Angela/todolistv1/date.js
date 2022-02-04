console.log(module);

module.exports.getDate= getDate;

function getDate() {
    let today = new Date();
   
    let options ={
        weekday:"long",
        day:"numeric",
        month:"long"
    }
    let day = today.toLocaleDateString("en-us",options);

    return day;
}

function getDay() {
    return "helloworld";
}

module.exports.getDay = getDay;

console.log(module.exports);
