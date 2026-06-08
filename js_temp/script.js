const text = [
"Risk Analyst",
"Data Analyst",
"Power BI Developer",
"SQL Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

if(count === text.length){
count = 0;
}

currentText = text[count];

letter = currentText.slice(0, ++index);

document.getElementById("typing").textContent = letter;

if(letter.length === currentText.length){

count++;
index = 0;

setTimeout(type,1000);

}else{

setTimeout(type,100);

}

})();
const counters = document.querySelectorAll('.counter');

const runCounter = () => {

counters.forEach(counter => {

const target = +counter.getAttribute('data-target');

const update = () => {

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText =
`${Math.ceil(current + increment)}`;

setTimeout(update,20);

}else{

counter.innerText =
target.toLocaleString();

}

};

update();

});

};

window.onload = runCounter;