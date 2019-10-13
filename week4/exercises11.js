
function shoppingTime(memberId, money) {
    // you can only write your code here!
    var barang = [['Stacattu', 1500000],['Baju Zoro', 500000],['Baju H&N', 250000],['Sweater Uniklooh', 175000],['Casing Handphone', 50000]]
    var beli = 0
    var barangTerbeli = []
    for ( var i = 0; i < barang.length; i++){
        //console.log(barang[i])
        if ( money >= barang[i][1] + beli){
            beli += barang[i][1]
            barangTerbeli.push(barang[i][0])
        }
        var sisa = money - beli
        var baru = {}
        baru['memberID'] = memberId;
        baru['money'] = money;
        baru['listPurchased'] = barangTerbeli;
        baru['changemoney'] = sisa;
        if ( memberId === undefined && money === undefined || memberId.length === 0){
            return 'Mohon maaf, toko x berlaku untuk member saja'
        }
        if ( money < 50000){
            return 'Mohon maaf, uang tidak cukup'
        }
    }
    return baru
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('barangTerbeli82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja


//   Sepatu brand Stacattu seharga 1500000
//   Baju brand Zoro seharga 500000
//   Baju brand H&N seharga 250000
//   Sweater brand Uniklooh seharga 175000
//   Casing Handphone seharga 50000
