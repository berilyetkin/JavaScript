//for(ilk atama ; dongu_calıştırma_sartı ; her_calısma_sonrası_ne_olacak)
//for (let i= 0; i <3; i++) {
//    console.log("benim adım beril");
//    console.log("naber");
//}
//
//for(let i = 0, j=0; (i+j) < 20; i=i+5, j=j+2) {
//    console.log("i değeri:"+i+" j değeri:"+j);
//    console.log("döngü çalıştı");
//}
//
//for ( let i = 0; i < 5; i++); {
//    console.log ("merhaba");
//}

let sayi = 5;
while(sayi<15){
    console.log("Merhaba");
    sayi++;
}

for (let j = 5; j< 15; j++) {
    console.log("merhaba for");
}

let yas = 20;
do {
    console.log("do while merhaba");
    yas++; 
} while (yas < 30);

// break continue return
for (let i= 0; i < 50; i++) {
    if ( i == 12) {
        break;
    }
    console.log ("break kullanımı");
}

for (let i = 10; i <30; i++) {
    if(i == 15) {
        continue;
    }
    console.log("continue kullanımı"+i);
}

// for içinde return kullanımı sadece fonksiyon içindeyse olur
// for ( let i = 0; i <30; i++) {
//     if(i==5) {
//         return;
//     }
//     console.log("return kullanımı" +i);
// }

