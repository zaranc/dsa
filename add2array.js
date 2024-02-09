let arr =[2,12,3,5,7]

let index =3
let element =20
let element2=30

for(let i = arr.length+1; i > index; i--){

    arr[i] = arr[i - 2]
 }

 arr[index] = element
 arr[index + 1] = element2

 console.log(arr);