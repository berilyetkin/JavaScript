//let saniyeString = prompt("Saniye değerini giriniz", "575346")
//let saniye = parseInt(saniyeString);
//let dakika = saniye / 60;
//let Kalansaniye = saniye % 60;
//console.log(typeof saniye);
//console.log(`Girdiğiniz ${saniye} değeri : ${dakika} dakika ve ${Kalansaniye} saniyedir `);


//let fahrenheitString = prompt("Fahrenheit değerini giriniz" , "88")
//let fahrenheit = parseInt(fahrenheitString);
//let celcius = 5/9 * (fahrenheit - 32);
//console.log(typeof fahrenheit);
//console.log(`Girdiğiniz ${fahrenheit}  fahrenheit değeri : ${celcius} celcius derecedir`);


let GirilenYil = parseInt(prompt("Yılın değerini girin", "2560"));
let artikYilMi = ((GirilenYil % 400 ) == 0 || ( GirilenYil % 4 == 0 && GirilenYil % 100 != 0));
console.log(`Girilen ${GirilenYil} artık yıl mı ? ${artikYilMi}`);

