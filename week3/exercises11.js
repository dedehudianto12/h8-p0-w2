
function tentukanDeretAritmatika(arr) {
    var gap = arr[1] - arr[0]
    var tampung = 0
    for (var i = 0; i < arr.length-2; i++){
        tampung = Number(arr[i+1] - arr[i])
        if (tampung !== gap){
            return false
        }
    }
    //  if (tampung === gap){
            
    //      }
    return true
    // return ''
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
   console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false