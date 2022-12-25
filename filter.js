const bitkiler = [
    {ad: `üzüm`, tur:`meyve`},
    {ad: `çilek`, tur: `meyve`},
    {ad: `pattes`, tur: `sebze`},
    {ad: `havuç`, tur: `sebze`},
];

function kendiFilterYapim(dizi, filtreSartlari){
    const geciciDizi = []
    for (let i = 0; i < dizi.length; i++) {
        const sonuc = filtreSartlari(dizi[i]);
        if(sonuc) {
            geciciDizi.push(dizi[i]);
        }
    }
}











// const meyveler = bitkiler.filter(function (bitki) {
//     return bitki.tur === `meyve`;
// });

// const sebzeler = bitkiler.filter(function (bitki){
//     return bitki.tur === `sebze`;
// });

// console.log(meyveler);
// console.log(sebzeler);







// function meyveleriBul() {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++) {
//         if(bitkiler[i].tur === `meyve`) {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi
// }

// console.log(meyveleriBul());

// function sebzeleriBul() {
//     const geciciDizi = [];
//     for(let i = 0; i < bitkiler.length; i++) {
//         if(bitkiler[i].tur === `sebze`) {
//             geciciDizi.push(bitkiler[i]);
//         }
//     }
//     return geciciDizi
// }

// console.log(sebzeleriBul());