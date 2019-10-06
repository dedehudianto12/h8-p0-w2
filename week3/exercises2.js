
// KALO STRING ///////////////////////

var tampung = ''
function balikString1(str){
    for ( var i = str.length-1; i >= 0; i--){
        tampung = tampung + str[i]
        
    }
    return tampung
}

console.log(balikString1('hello world'))


// KALO ARRAY ///////////////////

function balikString2(arr){
  
    var hasil = []
    
    for ( var i = 0; i < arr.length; i++ ){
      for ( var j = arr[i].length-1; j >= 0; j--){
        //console.log(arr[i][j])
        hasil.push(arr[i][j])
      }
      return hasil.join('')
    }
}
console.log(balikString2(['Hello World']))


