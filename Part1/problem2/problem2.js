function fibonacci(number) {
  // Your code here
  if(number <= 1) {
    return number;
  }
  else {
    return fibonacci(number-1) + fibonacci(number - 2);
  }
}

//bikin if else
//klo numbernya 0 keluarin 0
//klo numbernya 1 keluarin 1
/*klo numbernya 2 maka di mundurin hasilnya sesuai deret pada soal.
jadi (2-1)+(2-2)=1+0=1*/

/*untuk number 2 dan seterusnya menggunakan prinsip seperti number 2*/

console.log(fibonacci(0)); //0
console.log(fibonacci(2)); //1
console.log(fibonacci(9)); //34
console.log(fibonacci(10)); //55
console.log(fibonacci(12)); //144


module.exports = fibonacci;
