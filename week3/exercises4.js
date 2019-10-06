var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]
function dataHandling2(input){

     input.splice(1, 4, 'Roman Alamsyah Elshrawy', 'Provinsi Bandar Lampung', '21/05/1989', 'Pria', 'SMA Internasional Metro')
     console.log(input)

    var tanggal = input[3]
    var tanggal1 = tanggal.split('/')
    var bulan = tanggal1[1]
    
    switch (Number(bulan)){
        case 01: 
            console.log('Januari');
            break;
        case 02: 
            console.log('Februari');
            break;
        case 03: 
            console.log('Maret');
            break;
        case 04:
            console.log('April')
            break;
        case 05:
            console.log('Mei')
            break;
        case 06:
            console.log('Juni')
            break;
        case 07:
            console.log('Juli')
            break;
        case 08:
            console.log('Agustus')
            break;
        case 09:
            console.log('September')
            break;
        case 10:
            console.log('Oktober')
            break;
        case 11:
            console.log('November')
            break;
        case 12:
            console.log('Desember')
            break;
        default :
            console.log('SANTUY')
    }
    
    tanggal1.sort(function(a, b){return b - a})
    console.log(tanggal1)

    var format = input[3]
    var format1 = format.split('/')
    var format2 = format1.join('-')
    console.log(format2)

    var nama = input[1]
    var nama1 = nama.slice(0, 15)
    console.log(nama1)
}

dataHandling2(input)

//["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]