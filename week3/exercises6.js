

function angkaPalindrome(num){
    num = num + 1
    // if angkaPalindrome, return num
    // else num++
   
    
    var belomKetemu = true
    while ( belomKetemu ){
        // console.log("masuk loop, num: " + num)
        var tampung = ''
        var kata = String(num)
        for (var i = kata.length-1; i >= 0; i--){
            tampung = tampung + kata[i]
        }

        // console.log("tampung: " + tampung)
        // console.log("kata: " + kata)
        if (tampung !== kata ){
            num++
        } else {
            belomKetemu = false
        }
        
    }
    return num
    
   
}
// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001