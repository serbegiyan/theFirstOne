let par = document.querySelector('p');
let colors = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

let arr = par.textContent.split('');
let res = arr.map(function(elem){
	return '<span>' + elem +  '</span>';
	});
par.textContent = '';
par.innerHTML = res.join('');

let spans = par.querySelectorAll('span');
spans[0].classList.add(colors[Math.round(Math.random() * 5)]);
for (let span of spans){
	let random1 = Math.round(Math.random() * 4);
	let res = [];
	if (span.previousElementSibling != null){
		colors.forEach(function(elem){
			if(span.previousElementSibling.classList.value != elem){
				res.push(elem);
			}
		});
	span.classList.add(res[random1]);
	}
}

