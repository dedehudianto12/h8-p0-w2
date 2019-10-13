
function naikAngkot(arrPenumpang) {
    var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arr = []
    

    for ( var i = 0; i < arrPenumpang.length; i++){
        var hasil = {}
        var ber = 0
        var sam = 0
        for ( var j = 0; j < rute.length; j++ ){
            hasil['penumpang'] = arrPenumpang[i][0]
            hasil['naikDari'] = arrPenumpang[i][1]
            hasil['tujuan'] = arrPenumpang[i][2]
            if ( rute[j] === arrPenumpang[i][1]){
                ber = j
            }
            if ( rute[j] === arrPenumpang[i][2]){
                sam = j
            }
            var ongkos = (sam - ber)*2000
            hasil['bayar'] = ongkos
        }
        arr.push(hasil)
    }
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]