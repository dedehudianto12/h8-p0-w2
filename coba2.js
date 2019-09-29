// Senin
1.//Pseudocode --> Newton II LAW
/*
Algoritma :

1. Masukan Input F sama dengan 0
2. Masukan Input M sama dengan 600kg
3. Masukan Input A sama dengan 2 m/s2
4. Mencari F dengan menggunakan rumus F = M * A
5. Tampilkan hasil F

Pseudocode :
*/
var F = '0'
var M = '600'
var A = '2'
var hasilKali = M * A
console.log(hasilKali);

2.// Tahun Kabisat
/*
Algoritma :

1. Memasukan tahun
2. Jika tahun habis dibagi 4 dan tidak habis dibagi 100;
    Maka tampilkan Tahun adalah Tahun Kabisat
3. Jika tahun habis dibagi 4, habis dibagi 100, dan habis dibagi 400;
    Maka tampilkan Tahun adalah Tahun Kabisat
4. Selain itu tampilkan Tahun adalah Bukan Tahun Kabisat

Pseudocode :

var tahun = ''
if ( tahun % 4 == 0 && tahun % 100 != 0){
    console.log ('Tahun Kabisat')
}
else if ( tahun % 4 == 0 && tahun % 100 == 0 && tahun % 400 == 0){
    console.log ('Tahun Kabisat')
}else {
    console.log ('Bukan Tahun Kabisat')
}

3.// Laundry Day

Algoritma :

1. Foxie mempunyai baju kotor = 20
2. Baju kotor di dalam mesin cuci = 0
3. Selama baju kotor didalam mesin cuci < baju kotor, mesin cuci tidak akan menyala
4. Foxie lalu memasukkan baju kotor ke dalam mesin cuci satu persatu 
5. Jika baju kotor didalam mesin cuci mencapai 20 mesin dinyalakan

Pseudocode :
*/

var bajuKotor = 20
var bajuDalam = 0

while ( bajuDalam < bajuKotor ){
    bajuDalam++
    console.log(bajuDalam)
}
console.log('Mesin Nyala')

4.// Periksa Kuku

/* Algoritma

1. Jumlah siswa = 40
2. Jumlah siswa yg sdh diperiksa = 0 
2. Selama guru memeriksa kuku para siswa sebelum mencapai 40;
3.  Jika ada siswa berkuku panjang maka siswa akan dihukum
4.  Jika ada siswa berkuku pendek pendek maka dipuji
5. Jika sudah mencapai 40 maka pemeriksaan selesai

Pseudocode */
/*
var siswa = 40
var terperiksa = 0
while (terperiksa < siswa){
    siswa++
    if (siswa = "berkuku panjang"){
        console.log('Dihukum')
    }else {
        console.log('Dipuji')
    }
}console.log(siswa)
console.log('Selesai')
*/





