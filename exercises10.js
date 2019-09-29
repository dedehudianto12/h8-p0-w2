// Balik Kata

function balikKata(kata){
    var word = '';
    for (var i = kata.length-1; i >= 0; i--){
        word = word + kata[i]
    }
return word;
}
    
console.log(balikKata('kata'));