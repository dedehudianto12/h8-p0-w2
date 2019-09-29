1.// Menyusun Barisan Bintang

for (var i = 0; i <= 5; i++){
    console.log('*')
}


2.// Menyusun Barisan Bintang dengan Nested Looping

var bintang = ''
for (var i = 0; i <= 5; i++){
        for (var j=0;j<5;j++){
            bintang = bintang + '*';
        }
        console.log(bintang)
        bintang = ''
    }


3.// Menyusun Barisan Tangga Bintang Dengan Nested Looping

var tampung = ""
for (var i = 0; i < 5; i++){
    for( var a = 0; a < 5; a++){
    }
    tampung = tampung + "*";
    console.log(tampung)
    
}
