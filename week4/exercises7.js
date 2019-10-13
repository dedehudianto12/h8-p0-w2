
function urutkanAbjad(str) {
    
    var baru = []
    for ( var i = 0; i < str.length; i++){
        baru.push(str[i])
    }
    baru.sort()
    
    var hasil = baru.join('')
    
    return hasil

}
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'