alert("I am awesome");


// $.get('http://numbersapi.com/1337/trivia?notfound=floor&fragment', function(data) {
//     $('#number').text(data);
// });
console.log("yes");
var spaceData;

function setup(){
    createCanvas(200,200);
    loadJSON('http://numbersapi.com/1337/trivia?notfound=floor&fragment', gotData, 'jsonp');
}
function gotData(data) {
    spaceData = data;
}

function showData() {
    if(spaceData) {
        document.write(spaceData);
    }
}