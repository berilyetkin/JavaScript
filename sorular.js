
// let sayi1 = 10;
// let sayi2 = 20;
 
// console.log("Yer değiştirilmeden önceki değeri");
// console.log("Sayi1={0}", sayi1);
// console.log("Sayi2={0}", sayi2);
 
 
// sayi1 = sayi1 + sayi2;
// sayi2 = sayi1 - sayi2;
// sayi1 = sayi1 - sayi2;
// console.log("_________________");
// console.log("Yer değiştirilmeden sonraki değeri");
// console.log("Sayi1={0}", sayi1);
// console.log("Sayi2={0}", sayi2);
 
// console.log();
 

//  const process = require('process');
//  var args = process.argv;
//  console.log(args);
// function toplama (){
//      let a = parseInt(args[3])
//      let b = parseInt(args[4])
//      console.log(`Toplam = ${c}`) 
// } 
//  function print (){
//      for (i = 3;i<args.length;i++){
//          process.stdout.write(`${args[i]} `)
//      }



//  }

//  function file (){
//      var dosya = ew file (`/Desktop/çalışberilçalış/gorkem_abinin_sorular/${args[3]}`)
//      callback(file);
//          if(dosya.exists()){
//          return true
//      }else{
//          return false
//      }


//  }
//  if (args[2] == "toplama"){     toplama()
//  }else if (args[2] == "print"){
//      print()
//  }else if(args[2] == "file"){
//      file()
//  }else{
//      console.log("Geçersiz komut. Komut listesi:file,toplama,print")
//  }



// function welcome(greetingMsg, callback){
//     console.log("Before calling callback");
//     callback(greetingMsg);
//     console.log("After calling callback");
//   }
//   function sayMyName(greet){
//     console.log(greet + " Professor");
//   }
//   welcome("Hello", sayMyName);


// console.log('Start')

// function sum(a, b) {
//   console.log(a + b)
// }

// function operation(val1, val2, callback) {
//   callback(val1, val2)
// }

// operation(3, 4, sum)

// console.log('End')

// console.log('Start')

// function loginUserServer(email, callback) {
//   setTimeout(() => {
//     console.log('We have the data')
//     callback({ userEmail: email })
//   }, 5000)
// }

// const user = loginUserServer('muditwt@scaler.com', (user) => {
//   console.log(user)
// })

// console.log('End')


const process = require('process');
const fs = require('fs')
var args = process.argv;
console.log(args)
function toplama (){
    let a = parseInt(args[3])
    let b = parseInt(args[4])
    c = a + b;
    console.log(`Toplam = ${c}`) 
}
function print (){
    for (i = 3;i<args.length;i++){
        process.stdout.write(`${args[i]} `)
    }



}


function file (){
    const path = (`./${args[3]}`)
    if(fs.existsSync(path)){
        console.log("1") 
   }else{
        console.log("0") 
    }


}
eval(`${args[2]}()`)


//  const crawl = async ({url}) => {
//    const response = await fetch(url);
//    const html = await response.text();
//    console.log("html", html);
 
//  }
//  crawl({
//    url:"http://www.ingstagram.com/"
//  });

// async function fetchText() {
//     let response = await fetch('/readme.txt');
//     let data = await response.text();
//     console.log(data);
// }
// async function fetchText() {
//     let response = await fetch('/readme.txt');

//     console.log(response.status); // 200
//     console.log(response.statusText); // OK

//     if (response.status === 200) {
//         let data = await response.text();
//         // handle data
//     }
// }

// fetchText();


