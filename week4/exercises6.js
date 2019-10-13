
function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var tampung = []
    var hasil = []
    for ( var i = 0; i <= angka; i++){
        if ( angka % i === 0)
        tampung.push([angka/i, i]+"")
    }
    //console.log(tampung)
    for ( var j = 0; j < tampung.length;j++){
        //console.log(tampung[j])
        hasil.push(tampung[j].length)
    }
    hasil.sort(function(a, b){return a-b})
    return hasil[0]-1
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2