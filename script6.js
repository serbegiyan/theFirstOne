let inp1 = document.querySelector('#numnum1');
let inp2 = document.querySelector('#numnum2');
let inp3 = document.querySelector('#numnum3');
let param = document.querySelector('#param');

let initDate = {
	year:  2020,
	month: 10,
	day:   12,
}
	
let data = new Date(initDate.year, initDate.month, initDate.day);

let dayWeek = data.getDay();

param.textContent = dayWeek;

