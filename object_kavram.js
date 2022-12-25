let bero = {

    adi: `bero`,
    soyadi:`yetko`,
    dogumYili:2003,
    evliMi: `daha bir promise ring i yok`,
    secdigiRenkler: [`beyaz` ,`sarı` ],
    yasiHesapla : function () {
 this.yas = 2022 - this.dogumYili;
    }
}

let haso = {

    adi: `haso`,
    soyadi:`arıkano`,
    dogumYili:2004,
    evliMi: `daha bir promise ring almadi sevgilisine`,
    secdigiRenkler: [`beyaz` ,`sarı` ],
    yasiHesapla : function () {
 this.yas = 2022 - this.dogumYili;
    }
}

console.log(bero);
console.log(bero.dogumYili);
console.log(bero[`dogumyili`]);

bero.yasiHesapla();
console.log(bero.yas);

let sevgililer = [bero, haso];
console.log(sevgililer[1]);

haso.soyadi = "yetko";
haso[`soyAdi`] = " yepyeni soyadı";
console.log(haso);

 let renkler = [`mavi`, `kırmızı`,`yeşil`];
 let yeniRenkler = renkler;

 renkler[`mavi`, `kırmızı`, `yeşil`];
 renkler.splice(3, 0, `turkuaz` , `lacivert` );
 console.log(renkler, yeniRenkler);


// let sayilar = [1, 2, 3, 4, 5, 6, 7, 8];
// sayilar.splice(8, 0, 9, 10);
//  console.log(sayilar.toString());