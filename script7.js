/*let inpu = document.querySelector('#numnum');
let prev = document.querySelector('#prev');
let next = document.querySelector('#next');

let i = localStorage.length;
inpu.addEventListener('keypress', function(event){    
    if(event.key == 'Enter'){
        localStorage.setItem(i, inpu.value);
        inpu.value = '';
        i++;
    }
});
let j = localStorage.length - 1;
let k;
prev.addEventListener('click', function(event){
    event.preventDefault();
    inpu.value = localStorage.getItem(j);
    j--;
    if (j < 0){
        j = localStorage.length - 1;
    }
    k = j + 2;
    console.log(j)
})

next.addEventListener('click', function(event){        
    event.preventDefault();
    inpu.value = localStorage.getItem(k);
    k++;
    if (k >= localStorage.length){
        k = 0;
    }
    console.log(k)
})
inpu.addEventListener('input', function(){    
    if(inpu.value.includes('blur')){
        inpu.blur();
    }
});*/