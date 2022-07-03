function primaSegiEmpat(wide, high, start) {
  // Your code here
  //Deklarasiin dlu let yang mau digunakan
  let arr = [];
  let bilPrima = [2, 3, 5, 7];
  let i = 1;

  //bikin looping
  while (arr.length != wide * high) {
    start++;
    /*bikin branching pakai if, kalau mengandung start atau startnya dimodulus dari bilangan prima >10 sama dengan 0,
     maka tambahin isiannya dibelakang pakek push. Tapi kalo enggak ya gak ngeluarin apa-apa (lanjut cari)*/
    if (bilPrima.includes(start) || (start % 2 != 0 && start % 3 != 0 && start % 5 != 0 && start % 7 != 0)) {
      arr.push(start);
    }
  }
  //deklarasikan let yang mau digunakan sebelum masuk ke looping
  let upperBound = 0;
  let lowerBound = wide;
  let print = '';
  //cetak angka sekaligus tambahkan spasi setiap hasil yang diperoleh dengan cara looping
  for (let i = 0; i < high; i++) {
    print += arr.slice(upperBound, lowerBound).join(' ') + '\n';
    upperBound += wide;
    lowerBound += wide;
  }
//step terakhir cetak
  console.log((print += arr.reduce((a, b) => a + b, 0)));
}

  primaSegiEmpat(2, 3, 13)
  /*
  17 19
  23 29
  31 37
  156
  */
  primaSegiEmpat(5, 2, 1)
  /*
  2   3   5   7   11
  13  17  19  23  29
  129
  */
module.exports = primaSegiEmpat;
