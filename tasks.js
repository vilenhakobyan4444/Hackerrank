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
console.log(birthdayCakeCandles([3, 2, 1, 3]));



                  // Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    var min = 0;
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                var sort = arr[j];
                arr[j] = arr[i];
                arr[i] = sort;
            }
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            max += arr[i];
        }
        if (i != arr.length - 1) {
            min += arr[i]
        }
    }
    console.log(min + " " + max);
}
miniMaxSum([1,2,3,4,5]);




// Complete the staircase function below.
function staircase(n) {
    let str = "",
    space = 0,
    hash = 0;
    for(var i = 0; i < n; i++){
        space = n - i - 1;
        hash = i + 1;
        for(let y = 0; y < space; y++){
            str += " ";
        }
        for(let a = 0; a < hash; a++){
            str += "#";
        }
        console.log(str);
        str = "";
    }

}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}

