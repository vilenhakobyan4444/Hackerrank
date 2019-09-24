          ***arraySumm***

function simpleArraySum(ar) {
    var count = 0;
    for(var i = 0; i<ar.length; i++){
         count+=ar[i];
    }
    return count;
}



 //BirthdayCakeCandles function below.

function birthdayCakeCandles(ar) {
    var count=0;
    var max = ar[0];
    for(var i = 0; i<ar.length; i++){
        if(ar[i]>max){
            max = ar[i];
        }
    }
    for(var j = 0; j<ar.length; j++){
        if(ar[j]===max){
            count++;
        }
    }
    return count;
}
