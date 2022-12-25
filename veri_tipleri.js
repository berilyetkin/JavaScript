// 2 tip veri : referans ve primitive
// primitive : null,  number, string, boolean, undefined, symbol
// referans: object

let sayi = 50
console.log(sayi);
console.log(typeof sayi);
// ondalıklı ve ngatif de aynı şekilde 

let isim = "Ayşenaz Beril";
let soyisim = "Yetkin";

let cumle = "Berilin Laptobu";
console.log(cumle);

console.log(isim);
console.log(typeof isim);

let Tamisim = isim + ' ' + soyisim;
console.log(Tamisim);
console.log(typeof Tamisim);

//template literal - backtick
let Tamisim2 = ` ${isim} ${soyisim}`
console.log("template literal : " +Tamisim2);

console.log(`template literal ile yazdır ${Tamisim2}`);

let asalSayiMi = true
console.log(`Veri türümüzün değeri ${asalSayiMi} veritipi: ${typeof asalSayiMi}`);

let renk;
renk = "beyaz"
console.log(renk);
console.log(typeof renk);

let yas = null;
console.log(`Veri türümüzün değeri ${yas} veritipi: ${typeof yas}`);
console.clear();

