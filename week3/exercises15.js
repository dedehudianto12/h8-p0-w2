
function groupAnimals(animals) {
    
    animals.sort()
    var result = []
    //console.log(animals)

    for ( var i = 0 ; i < animals.length; i++){
        if ( result.length === 0){
            result.push([animals[i]])
            //console.log(result[0][0][0])
        }
        else{
            var flag = false
            var y = j
            for ( var j = 0; j < result.length; j++){
                if (animals[i][0] === result[j][0][0]){
                    flag = true
                    y =j
                }
            }
            if ( flag === false){
                result.push([animals[i]])
            }
            else if( flag === true ){
                result[y].push(animals[i])

            }
        }
    }
    return result
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]


  // [ 'anoa', 'ayam', 'cacing', 'kancil', 'kuda' ]