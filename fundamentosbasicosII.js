1. 
function grande(arr){

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = 'big';
        }
    }
    return arr; 
}

console.log(grande([2,3,-1,5,-35]));

2.
function menorMayor(arr){
    let min = arr[0];
    let max = arr[0];

    for( let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }

        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log(min);
    return max;
}

console.log(menorMayor([1,2,3,4,5,6,8,-10,4,7,3]));



3. function printReturn(arr){

    console.log(arr[arr.length-2]);

    for(let i = 0; i<arr.length; i++){

        if(arr[i]%2 !== 0){
            return arr[i];
        }
    }
}

console.log(printReturn([-2,6,8,7,9,20]));


4. 
function dobleVision(arr){

    let newarr = [];
    let temp = 0;

    for( let i = 0; i < arr.length; i++){
         temp = arr[i] * 2;
        newarr.push(temp);
    }

    return newarr;
}

let arr1 = [1,2,3];

console.log(dobleVision(arr1));
console.log(arr1);

5.

function contarPositivos(arr){

    let arrpos = [];

    for( let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arrpos.push(arr[i]);
        }
    }

    arr.pop();
    arr.push(arrpos.length);
    return arr;
}

console.log(contarPositivos([-1,1,1,1]))

6. 
function paresImpares(arr){

    let imparcount = 0;
    let parcount = 0;

    for( let i = 0; i < arr.length; i++){

        if(arr[i]%2 !== 0){
            imparcount++;
            parcount = 0;
        }

        else{
            parcount++; 
            imparcount = 0;
        }

        if(imparcount == 3){
            console.log("¡Que imaparcial!");
            imparcount = 0;
        }

        else if(parcount == 3){
            console.log("¡Es para bien!");
            parcount = 0;
        }
    }
}

paresImpares([1,1,2,2,1,1,1]);

7. 
function incrementaSeg(arr){

    for( let i = 0; i < arr.length; i++){

        if(i%2 !== 0){
            arr[i] = arr[i] + 1;
        }

        console.log(arr[i]);
    }

    return arr;
}

console.log(incrementaSeg([2,3,4,5,6,7,8]));

8. 
function longPrev(arr){
    
    for (let i = (arr.length) - 1 ; 0 < i; i--){
        arr[i] = arr[i-1].length;
    }
    return arr;
}

console.log(longPrev(["programar","dojo","genial"]));

console.log(longPrev(["programar","dojo","genial"]));


9. 

function agregaSiete(arr){

    let newarr = [];
    let newval = 0;

        for( let i = 0; i < arr.length; i++){
            newval = arr[i] + 7;
            newarr.push(newval);
        }

        return newarr;
}

console.log(agregaSiete([1,2,3]));

10. 


function inverso(arr){

    let resta = 1;

    for( let i = 0; i < arr.length/2; i++){

        let temp = arr[i]

        arr[i] = arr[arr.length-resta];
        arr[arr.length-resta] = temp;
        resta = resta + 1;
    }

    return arr;
}

console.log(inverso([3,1,6,4,2]));

11.

function neg(arr){

    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i]*-1;
        }
    }
    return arr;
}

console.log(neg([1,-3,5]));

12.
function siempreHambriento(arr){

    for( let i = 0; i < arr.length; i++){

        if(arr[i] == 'comida'){
            console.log('yummy');
        }

        else{
            console.log('tengo hambre');
        }
    }
}

siempreHambriento(['comida',2,3,'comida',5]);

13. 

function camCent(arr){

    let resta = 1;

    for( let i = 0; i < arr.length/2; i+=2){

        let temp = arr[i]

        arr[i] = arr[arr.length-resta];
        arr[arr.length-resta] = temp;
        resta = resta + 2;
    }

    return arr;
}

console.log(camCent([1,2,3,4,5,6,7,8,9]));

14.


function escalaArr(arr,x){

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i]*x;
    }

    return arr;

}

console.log(escalaArr([1,2,3], 3));
