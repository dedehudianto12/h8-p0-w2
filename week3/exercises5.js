var tampung = ''
function palindrome(kata){
        for ( var i = kata.length-1; i >= 0; i--){
            tampung = tampung + kata[i]    
        }
        if (tampung === kata){
            return true
        }else {
            return false
        }

        
}
console.log(palindrome('kuda'))