let temp = 45
if (temp < 20) {
    console.log("It is a cold day")
}
else if (temp > 20 && temp < 30) {
    console.log("It is a pleasent day")
}
else{
    console.log("It is a hot day")
}

var add = (a, b) => {
    var sum = a + b;
    console.log(sum);
    console.log('this is the sum $(sum)')
}
add(5,7)