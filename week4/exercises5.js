

function ubahHuruf(kata) {
    var alpha = 'abcdefghijklmnopqrstuvwxyz'
    var tampung = ''
    
    for ( var i = 0; i < kata.length; i++){
        for ( var j = 0; j < alpha.length; j++){
            if ( kata[i] === alpha[j]){
                tampung += alpha[j+1]
            }
        }
    }
    return tampung
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu