
function minMax(arr){
    let minNum = arr[0];
    for (let i=0; i<arr.length; i++){
        if(arr[i]<minNum){
            minNum=arr[i];
        }
    }
    console.log("minimum number is: " +minNum);
    //return minMax

    let maxNum = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>maxNum){
            maxNum=arr[i];
        }
    }
    console.log("max number is: " +maxNum);

    let result = []
    result[0]=minNum
    result[1]=maxNum
    return result;

}


minMax([23,435,87,123,3,46,-1234,-1,-5,-6,-123,465,7846,5,2,17856])
