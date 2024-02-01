// no 1
let hargajeruk = 5000;
let hargadiskon = 5;
let beli = 5;

let hasil = hargajeruk* hargadiskon;
let total = hasil * 5 / 100;
let bayar = hasil - total;

console.log(`harga asli ${hasil} harga diskon ${total} total harga ${bayar}`)

// no2
let bilangan;   
let satuan;
let puluhan;
let ratusan;

console.log("Masukkan bilangan: ");
bilangan = Number(prompt());

satuan =Math.floor(bilangan % 10);

puluhan =Math.floor(bilangan  % 100 / 10);

ratusan =Math.floor(bilangan % 1000 / 100);

console.log(`Satuan: ${satuan}`)
console.log(`Puluhan: ${puluhan}`)
console.log(`Ratusan: ${ratusan}`)

// no3
let cuaca = 300;
let suhu = (cuaca - 32) * (5 / 9);

if (suhu < 250) {
    jadi = "dingin";
} else if (suhu > 300) {
    jadi = "panas";
} else {
    jadi = "normal";
}

console.log(jadi)