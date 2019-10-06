

var tampung = ''
var kosong = ''
var gabung = ''
for ( var i = 0; i < 5; i++){
    tampung = tampung + ' *'
    // console.log(tampung)
    
   
    for (var j = 0; j < 5-i; j++){
        kosong = kosong + ' '
        //  console.log(kosong)
    }
    gabung = kosong + tampung 

    console.log(gabung)
    kosong = ''
}
  


