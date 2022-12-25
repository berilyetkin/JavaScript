const sayilar = [1, 2, 3, 4, 5, 6];

const yeniSayilar = sayilar.map(function (sayi) {
    return sayi * 2;
});

console.log(sayilar);
console.log(yeniSayilar);
console.log(sayilar);

const kitaplar = [
    {adi: `1`, sayfaSayisi:30 },
    {adi: `2`, sayfaSayisi:40 },
    {adi: `3`, sayfaSayisi:60 },
];

const sayfaSayilari = kitaplar.map(function (kitap) {
    return kitap.sayfaSayisi;
})

console.log(sayfaSayilari); 