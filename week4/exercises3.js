
function cariMedian(arr) {
    // you can only write your code here!
    hasilGanjil = 0
    hasilGenap = 0
    arr.sort(function(a, b){return a-b})
    if ( arr.length % 2 === 1){
        hasilGanjil = (arr.length-1) / 2
        return arr[hasilGanjil]
    }
    else {
        var genap = arr.length/2
        hasilGenap = arr[genap] + arr[genap-1]
        return hasilGenap / 2
    } 
  }
  
  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 6
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5