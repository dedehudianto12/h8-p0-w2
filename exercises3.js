// IF_ELSE 

var nama = 'Polo';
var peran = '';

if (nama == 'Polo' && peran ==''){
    console.log('Hallo ' + nama + ' , Pilih pernamu untuk memulai game!')
}
else if (nama == 'Pery' && peran == 'Ksatria'){
    console.log('Selamat datang di Neraka Proxytia, ' + nama )
    console.log('Hallo Kstria' + nama + ' , kamu dapat memenggal musuhmu')
}
else if (nama == 'Annabeth' && peran == 'Tabib'){
  console.log('Selamat datang di Neraka Proxytia, ' + nama)
  console.log('Hallo Tabib ' + nama + ',kamu harus menyembuhkan temanmu yg terluka')
}
else if (nama == 'Luke' && peran == 'Penyihir'){
  console.log('Selamat datang di Neraka Proxytia')
  console.log('Hallo Penyihir ' + nama + ' ,kamu bisa mengutuk musuhmu agar menang')
}else {
    console.log('Isi nama telebih dahulu !!!')
}