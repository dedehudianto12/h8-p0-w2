1.//Melakukan Looping Menggunakan While

console.log('Looping Pertama')

var counter = 0
while (counter < 20){
    counter = counter +2
    console.log(counter + '- I love coding')
}
console.log('Looping Kedua')

var counter1 = 22
while (counter1 > 0){
    counter1 = counter1 -2
    console.log(counter1 + '-I will become fullstack developer')
}

2.//Melakukan Looping Menggunakan For

console.log('Looping Pertama')

for (var counter2 = 0; counter2 <= 20; counter2++){
    console.log(counter2 + '- I love coding')
}

console.log('Looping Kedua')

for (var counter3 = 20; counter3 >= 0; counter3--){
    console.log(counter3 + '- I will become fullstack developer')
}


3.// Angka Ganjil dan Genap

var counter4 = 0
while ( counter4 < 100 ){
    counter4++
    if(counter4 % 2 == 0){
        console.log(counter4 + " GENAP")
    }else{
        console.log(counter4+ " GANJIL")
    }
}

console.log('Kelipatan 2')

var counter5 = 0
while ( counter5 < 100 ){
    counter5 = counter5 +2
    if(counter5 % 3 == 0){
        console.log(counter5+ ' 3 kelipatan 3')
    }else {
        console.log(counter5)
    }
}


console.log('Kelipatan 5')

var counter6 = 0
while ( counter6 < 100){
    counter6 = counter6 +5
    if(counter6 % 6 ==0){
        console.log(counter6 + ' 6 kelipatan 6')
    }else {
        console.log(counter6)
    }
}
*

console.log('Kelipatan 9')

var counter7 = 0
while (counter7 < 100){
    counter7 = counter7 +9
    if(counter7 % 10 == 0){
        console.log(counter7 + ' 10 kelipatan 10')
    }else {
        console.log(counter7)
    }
}
