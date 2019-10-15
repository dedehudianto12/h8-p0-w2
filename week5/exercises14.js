

function changeVocals (str) {
    //code di sini
    var abjad = 'abcdefghijklmnopqrstuvwxyzABCDFGHIJKLMNOPQRSTUVWXYZ'
    var vocal = 'aiueo'
    // var tampung = ''
    // console.log(str)
    str = str.split('')
    
    for ( var i = 0; i < str.length; i++){
      for ( var j = 0; j < abjad.length; j++){
        if ( str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o' || str[i] === 'A' || str[i] === 'I' || str[i] === 'U' || str[i] === 'E' || str[i] === 'O' ){
          if ( str[i] === abjad[j]){
             str[i] = abjad[j+1]
          }
        }
      }
    }
    return str
  }
  
  function reverseWord (str) {
    //code di sini
    newArr = []
    while (str.length){
        newArr.push(str.pop())
    }
    str = newArr
    return str
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    for ( var i = 0; i < str.length; i++){
        if (str[i] === str[i].toLowerCase()){
            str[i] = str[i].toUpperCase()
        }
        else{
            str[i] = str[i].toLowerCase()
        }
    }
    return str
  }
  
  function removeSpaces (str) {
    //code di sini
    str = str.join('')
    var name = ''
    for ( var i = 0; i < str.length; i++){
      if (str[i] !== ' '){
        name += str[i]
      }
    }
    return name
  }
  
  function passwordGenerator (name) {
    //code di sini
    var hurufVocals = changeVocals(name)
    var balikKata = reverseWord(hurufVocals)
    var capitalOrNot = setLowerUpperCase(balikKata)
    var gabungKata = removeSpaces(capitalOrNot)
    
    if ( gabungKata.length < 5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    return gabungKata
  }
  
  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

