/*
function bandingkanAngka(angka1, angka2){
    if(angka2 > angka1){
        return true
    }else if(angka2 < angka1){
        return false
    }else{
        return '-1'
    }
}
console.log(bandingkanAngka(2, 2))
*/

/*function balikKata(kata){
    var tampung = ''
    var panjang = kata.length - 1
    for (var i = panjang ; i >= 0; i--){
        tampung = tampung + kata[i]
        
    }
    return tampung
}
console.log(balikKata('perkele'))
*/

/*function konversiMenit(menit){
    var minutes = Math.floor(menit / 60)
    var seconds = menit % 60

    if (minutes < 10){
        minutes = '0' + minutes
    }
    if (seconds < 10){
        seconds = '0' + seconds
    }

    var hasil = minutes + ':' + seconds
    return hasil
}
console.log(konversiMenit(74))
*/

function xo(str){
    var x = 0
    var o = 0
    for(var i = 0; i <= str.length - 1;i++){
        if(str[i] === 'x'){
            x++
        }else {
            o++
        }
    }
    if (x === o){
        return true
    }else {
        return false
    }
}
console.log(xo('xoxo'))