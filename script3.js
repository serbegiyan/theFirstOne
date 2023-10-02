let dat = [];

for (let i = 2000; i <= 2005; i++){
    for (let j = 1; j <= 12; j++){
        for (let k = 1; k <= 30; k++){
            if (two(i) + two(j) + two(k) == 5){
                dat.push(i + ' ' + j + ' ' + k); 
            }                       
        }
    }
}
function two(num){
    let x = 0;
    for (let elem of String(num)){
        if (elem == 2){
            x++;            
        }        
    }
    return x;
}
//console.log(dat);
