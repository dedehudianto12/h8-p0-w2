
// var tampung = ''
// function balikString(str){
//     for ( var i = str.length-1; i >= 0; i--){
//         tampung = tampung + str[i]
        
//     }
//     return tampung
// }

//balikString('hello world')

function balikString(arr){
  
    var hasil = []
    
    for ( var i = 0; i < arr.length; i++ ){
      for ( var j = arr[i].length-1; j >= 0; j--){
        //console.log(arr[i][j])
        hasil.push(arr[i][j])
      }
      return hasil.join('')
    }
}

console.log(balikString(['Hello World']))


