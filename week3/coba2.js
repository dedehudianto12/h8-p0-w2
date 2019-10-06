
function groupAnimals(animals){
    var result = []
    
    for ( var i = 0; i < animals.length; i++){
        if ( result.length === 0){
            result.push(animals[0])
            //console.log(result)
        }
        else {
            var flag = false
            for ( var j = 0; j < result.length; j++){
                if ( animals[i] === result[j]){
                    flag = true
                }
            }
            if ( flag === false){
                result.push(animals[i])
            }
        }
    }
    return result
}



console.log(groupAnimals(['cacing', 'ayam', 'cacing', 'ayam', 'kuda']));
// [cacing , ayam , kuda]




