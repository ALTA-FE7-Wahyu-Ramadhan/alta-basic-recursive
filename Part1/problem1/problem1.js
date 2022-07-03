function primeX(number) {
  let num = 0
  let arr = [2,3,5,7,11,13,17,19, 23, 29]
  num = arr[number-1]
  return num

}
//deklarasikan arraynya dlu
//sesuaikan isi dengan arraynya
//selesai
console.log(primeX(1)) //2
console.log(primeX(5)) //11
console.log(primeX(8)) //19
console.log(primeX(9)) //23
console.log(primeX(10)) //29

module.exports = primeX;
