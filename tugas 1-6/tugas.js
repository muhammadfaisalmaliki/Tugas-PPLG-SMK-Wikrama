// tugas 1-6
// no1
let bil1 = 20000;
let bil2 = 10000;
let bil3 = 2000;

if (bil1 > bil2 && bil3 < bil1) {
    hasil = (`${bil1} lebih besar`)
}else if (bil3 > bil1 && bil2 < bil3) {
    hasil = (`${bil3} lebih besar`)
}

console.log(hasil)

// no2
let angka = 0;
if (angka >= 0) {
    hasil1 = "positif";
}
else {
    hasil1 = "negatif";
}

if (angka % 2 == 0) {
    hasil2 = "genap";
}
else {
    hasil2 = "ganjil";
}
console.log(`jadi bilangan ${angka} adalah ${hasil1} dan ${hasil2}`)

// no3
let saklar = 3;

if ( saklar == 0 ) {
    hasilnya = "OFF"
} else if  (saklar == 1) {
    hasilnya = "ON";
} else {
    hasilnya = "ERROR"
}

console.log(hasilnya)

// no4
let susu = 70000;
let bakwan = 10000;
let mentega = 20000;

let jumlah = susu + bakwan + mentega;

if(jumlah >= 100000){
    result = jumlah * 10;
} else if(jumlah > 100000){
    result = "Dapat diskon";
}

console.log(`dapat diskon ${result}`)
console.log(jumlah)

// no5

let kerja = 10;

if(kerja == 6){
    total1 = "dapet gaji 200.000"
} else if(kerja > 6){
    total2 = "dapet gaji 300.000"
} else if(kerja < 6){
    total3 = "dapet gaji 100.000"
} else {
    total4 = "gak dapet gaji"
}

console.log(`jika lembur selama ${kerja} jam maka ${total2}`)

// no6
let air = 2000;
    if (air < 500) {
        jadi = "AMAN";
    } else if (air < 600) {
        jadi = "WASPASA";
    } else if (air < 650) {
        jadi = "SIAGA2";
    }else {
        jadi = "SIAGA1";
    }
    console.log(jadi)

    