
function changeVocals (str) {
    //code di sini
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var vocal = 'aiueo'
    var tampung = ''
    // str = str.split('')
    // console.log(str)
    for ( var i = 0; i < str.length; i++){
        for ( var j = 0; j < vocal.length; j++){
            for ( var k = 0; k < abjad.length; j++){
                if ( str[i] === vocal[j]){
                    tampung += abjad[k+1]
                }
            }
        }
    }
    console.log(tampung)
    // return str
  }

  console.log(changeVocals('Sergei Dragunov'))