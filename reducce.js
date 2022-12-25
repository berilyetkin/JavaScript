const sayilar = [1, 2, 3, 4, 5];


const yeniDizi = sayilar.map(function (sayi) {
 return sayi * 2;
});

const yeniDiziwithReduce = sayilar.reduce(function(dizininOncekiHali, oankisayi){
     dizininOncekiHali.push(oankisayi * 5);
    return dizininOncekiHali;
}, []);

console.log(yeniDizi);
console.log(yeniDiziwithReduce);