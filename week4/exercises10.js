

function changeMe(arr) {
    // you can only write your code here!
    var hasil = ''
    for ( var i = 0; i < arr.length; i++){
        hasil = i+1+'.' + arr[i][0] + ' ' + arr[i][1] + ':'
        var baru = {}
        baru['firstname'] = arr[i][0]
        baru['lastname'] = arr[i][1]
        baru['gender'] = arr[i][2]
        baru['age'] = arr[i][3] 
        if (typeof baru.age === 'undefined'){
            baru.age = 'Invalid Birth Year'
    }
    console.log(hasil)
    console.log(baru)
    }
    if ( arr[0] === undefined){
        console.log('""')
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
  // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""