

function changeVocals (str) {
    //code di sini
    var abjad = 'abcdefghijklmnopqrstuvwxyz'
    var vocal = 'aiueo'

    // console.log(str)
    for ( var i = 0; i < str.length; i++){
        for ( var j = 0; j < vocal.length; j++){
            for ( var k = 0; k < abjad.length; j++){
                if ( str[i] === vocal[j]){
                    str[i] = abjad[k+1]
                }
            }
        }
    }
    console.log(str)
    // return str
  }

  console.log(changeVocals('Sergei Dragunov'))

