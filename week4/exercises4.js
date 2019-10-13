
function cariModus(arr) {

//arr.sort(function(a, b){return a-b})
//console.log(arr)
    var tampung = 0
    var angka = 0

    for ( var i = 0; i < arr.length; i++){
        var date = 0
        for ( var j = 0; j < arr.length; j++){
            if ( arr[i] === arr[j] ){
                date += 1
            }
        }
        if(date>tampung){
            tampung = date
            angka = arr[i]
            //console.log(tampung)
        }
    }
    
    if(tampung === 1 || tampung === arr.length){
        return -1
    }else{
        return angka
    }
}  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7,7,7])); // -1

  /*
    CREATE tampung EQUAL 0
    CREATE angka EQUAL 0

    FOR each index in arr
        CREATE date EQUAL to 0
        FOR each index in arr
            IF arr index EQUALS to another index
            date INCREMENT
            END IF
        END FOR
        IF date GREATER THAN tampung
        date EQUAL to tampung
        angka EQUAL to arr index
        END IF
    IF tampung EQUAL to 1 OR tampung EQUAL to arr length
        RETURN -1
    END IF
    ELSE 
        RETURN angka
    END ELSE
*/
    
