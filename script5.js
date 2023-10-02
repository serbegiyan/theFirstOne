let tab = document.querySelector('#tab');

/*for (let i = 0; i < tab.rows.length; i++){    
    for (let j = 0; j < tab.rows[i].cells.length; j++){
        tab.rows[i].cells[j].addEventListener('click', func);        
    }           
}

tab.addEventListener('click', function(){
    for (let i = 0; i < tab.rows.length; i++){
        for (let j = 0; j < tab.rows[i].cells.length; j++){        
            if (tab.rows[i].cells[j].classList.contains('red')){
                for (let y = i - 1; y <= (i + 1); y++){
                    for (let k = j - 1; k <= (j + 1); k++){
                        tab.rows[y].cells[k].removeEventListener('click', func);                        
                    }
                }  
            }             
        }
    }
})
function func (){
    this.classList.add('red');
}

for (let i = 0; i < tab.rows.length; i++){
    let k = tab.rows.length - i;
    for(let j = 0; j < tab.rows[i].cells.length; j++){           
        tab.rows[i].cells[j].innerHTML = k++;        
    }
}*/

let t = 0;
let rotate = document.querySelector('#num');
let arX = [3, 1, 1, 3];
let arY = [3, 3, 1, 1];

rotate.addEventListener('click', function(){

t++;  
if (t > 3){
    t = 0;
}
for (let i = 0; i < tab.rows.length; i++){
    for(let j = 0; j < tab.rows[i].cells.length; j++){
        tab.rows[i].cells[j].classList.remove('red'); 
    }
}   
    for (let i = 0; i < tab.rows.length; i++){
        for(let j = 0; j < tab.rows[i].cells.length; j++){                       
            tab.rows[(i/2) + 2].cells[(j/2) + 2].classList.add('red'); 
            tab.rows[(i/2) + 2].cells[(j/2) + arX[t]].classList.add('red'); 
            tab.rows[(i/2) + arY[t]].cells[(j/2) + 2].classList.add('red');
        }
    }

})


