
function pasanganTerbesar(num) {
    // you can only write your code here!
    var nomor = String(num)
    var nomor1 = nomor.split("")
    var kosong = []
    for( var i = 0; i <= nomor1.length; i++ ){
        kosong[i] = Number(nomor1[i]+nomor1[i+1])
    }
    kosong.pop()
    kosong.pop()
    
    var patok = kosong[0]
    for ( var j = 1; j < kosong.length; j++){
        if ( kosong[j] > patok){
            patok = kosong[j]
        }
    }
    return patok
   }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99