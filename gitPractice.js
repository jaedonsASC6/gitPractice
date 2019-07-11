let prac = [14,20,30,64,13,33,5]
function multiplyArrayNumbersByTwo(arr){
    for(let i = 0;i < arr.length;i++){
        arr.splice(i,1,arr[i]*2)
    }
}
multiplyArrayNumbersByTwo(prac)
console.log(prac)