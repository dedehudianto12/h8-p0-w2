
function totalDigitRekursif(angka) {
    // you can only write your code here!
    var baru = angka.toString()
    if ( baru.length === 1){
        return Number(baru)
    }
    else{
        var first = Number(baru[0])
        // console.log(first)
        baru = baru.slice(1)
        return first + totalDigitRekursif(Number(baru))
    }
  }
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5