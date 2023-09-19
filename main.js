const btn = document.getElementById("ubah")
const lagi = document.getElementById('2kali')


function duar() {
    btn.style.background = "white"
    btn.style.color = "black"
    btn.textContent = 'love you segede gabannnn hehe >_<'
    lagi.textContent = 'klik lagi coba'
}


// document.getElementById("2kali").onclick = () => {
//     duar()
// };
// // contohFunction beralih dalam menambahkan atau menghilangkan class show, yang dimana digunakan dalam menampilkan atau menyembunyikan konten dropdown
// function duar() {
//     document.getElementById("ubah").classList.toggle("show");
// }


// for (let i = 0; i < 100; i++) {
//     console.log('haloo in tu loop')
// }


// function pesan() {
//     return "ya allah mudahkan lahh jalan saya untuk menyenangkan orang tua saya aminnn";
// }

// console.log(pesan())

// const input = 'Hello World';
// const alphabet = 'abcdefghhijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
// let output = '';
// let index = 0;


// while (input !== output) {
//     if (input[index] === ' ') {
//         output += ' ';
//         index++
//         continue;
//     }
//     const ramndomAlphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
//     if (input[index] === ramndomAlphabet) {
//         output += ramndomAlphabet;
//         index++
//         console.log(output)
//     } else {
//         console.log(output + ramndomAlphabet);
//     }
//     for (let i = 0; i < 5000000; i++) { }
// }

// function calculate(nilai1, nilai2, arg) {
//     switch (arg) {
//         case 'tambah':
//             return nilai1 + nilai2
//         case 'kali':
//             return nilai1 * nilai2
//         case 'kurang':
//             return nilai1 - nilai2
//         case 'bagi':
//             return nilai1 / nilai2
//     }
//  }