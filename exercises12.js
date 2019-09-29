//Konversi Menit

function konversiMenit(menit){
    var minutes = Math.floor(menit / 60)
    var seconds = menit % 60

    if(String(seconds).length === 1){
        seconds = "0" + seconds
    }

    var hasil = minutes + ':' + seconds
    return hasil;
}
console.log(konversiMenit(120));