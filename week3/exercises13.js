
 function targetTerdekat(arr) {
    var kosongX = []
    var kosongO = 0
    var hasil = []
    
    if (arr.indexOf('x') === -1){
        return 0
    }else{
        
        for (var i = 0; i < arr.length; i++){
            if ( arr[i] === 'x'){
                kosongX.push(i)
                // console.log('kosong x =', kosongX)
                // console.log('x = ', i)
            }else if ( arr[i] === 'o'){
                kosongO = i
                // console.log('kosong o =', kosongO)
                // console.log('o = ', i)
            }
        }
    }
    //console.log(kosongX)
    for (var j = 0; j < kosongX.length; j++){
        hasil.push(Math.abs(kosongX[j]-kosongO))
        hasil.sort(function(a, b){return a - b})
    }
    //return hasil[0]
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2