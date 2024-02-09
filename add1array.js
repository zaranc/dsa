let arr =[2,12,3,5,7]

let index =3
let element =25

for(let i = arr.length; i > index; i--){

    arr[i] = arr[i - 1]
 }

 arr[index] = element

 console.log(arr);