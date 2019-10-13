
function fpb(angka1, angka2) {
    // you can only write your code here!
    tampung1 = []
    tampung2 = []
    hasil = []
    for ( var i = 0; i <= angka1; i++ ){
        if ( angka1 % i === 0){
            tampung1.push( angka1 / i)
        }
    }
    for ( var j = 0; j <= angka2; j++){
        if ( angka2 % j === 0){
            tampung2.push( angka2 / j)
        }
    }
    // console.log(tampung1)
    // console.log(tampung2)
    for ( var a = 0; a < tampung1.length; a++){
        for ( var b = 0; b < tampung2.length; b++){
            if ( tampung1[a] === tampung2[b]){
                hasil.push(tampung1[a])
            }
        }
    }
    return hasil[0]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1