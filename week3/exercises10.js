
function perkalianUnik(arr) {
    // console.log(arr[2]*ar

    // var arr2 = []
    // arr2[0] = arr[1] * arr[2]
    // arr2[1] = arr[0] * arr[2]
    // arr2[2] = arr[0] * arr[1]

    var tampung = ''
    var baru = []
    for ( var i = 0; i < arr.length; i++){
      //tampung += arr[i]
      var perkalian = 1
      for ( var k = 0; k < arr.length; k++){
        if ( i !== k){
        perkalian = perkalian * arr[k]
        //   console.log('i= '+ i, arr[i])
        //   console.log('k= ' +k, arr[k])
        //   baru.push(arr[i]*arr[k])
        //   console.log(baru)
        //   console.log('================')
        }
      
        //baru.push(arr[i]*perkalian)
      }
      baru.push(perkalian)
    }
    return baru
  }
  
  
  // TEST CASES
  //console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
   console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
  // console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
  // console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
  // console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]