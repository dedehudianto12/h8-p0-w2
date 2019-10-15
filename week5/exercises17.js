
function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var baru = angka.toString()
    if ( baru.length === 1){
        return Number(baru)
    }
    else{
        var first = Number(baru[0])
        // console.log(first)
        baru = baru.slice(1)
        hasil = first * kaliTerusRekursif(Number(baru))
        hasil = hasil.toString()
        return Number(hasil[hasil.length-1])
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6