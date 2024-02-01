// no 1
let pabp = 70;
let mtk = 82;
let dpk = 77;

let rata2 = (pabp + mtk + dpk) / 3;

if (rata2 >= 80 && rata2 <=100){
    grade = "A";
}
else if(rata2 >= 75 && rata2 <=80){
    grade = "B";
}
else if(rata2 >= 65 && rata2 <= 75){
    grade = "C";
}
else if(rata2 >=45 && rata2 <= 65){
    grade = "D";
}
else if(rata2 >=0 && rata2 <=45){
    grade = "E";
}
else {
    grade = "K";
}-


console.log("nilai: " + grade), console.log("hasil rata rata: " + rata2)

// no2
const kodePegawai = "22505197803";

// Membagi kode pegawai menjadi 4 bagian
const bagianKodePegawai = kodePegawai.split("");

// Nomor golongan
const nomorGolongan = bagianKodePegawai[0];

// Tanggal lahir
const tanggal = bagianKodePegawai[1] + bagianKodePegawai[2];
const bulan = bagianKodePegawai[3] + bagianKodePegawai[4];
const tahun = bagianKodePegawai[5] + bagianKodePegawai[6] + bagianKodePegawai[7] + bagianKodePegawai[8];

// Bulan lahir dalam format nama bulan
let bulan1;
switch (bulan) {
    case "01": bulan1 = "JAN" ; break;
    case "02": bulan1 = "FEB" ; break;
    case "03": bulan1 = "MAR" ; break;
    case "04": bulan1 = "APR" ; break;
    case "05": bulan1 = "MEI" ; break;
    case "06": bulan1 = "JUN" ; break;
    case "07": bulan1 = "JUL" ; break;
    case "08": bulan1 = "AGST" ; break;
    case "09": bulan1 = "SEP" ; break;
    case "10": bulan1 = "OKT" ; break;
    case "11": bulan1 = "NOV" ; break;
    case "12": bulan1 = "DES" ; break;
}

// Nomor urut
const nomorUrut = bagianKodePegawai[10];

// Mencetak nomor golongan
console.log(`Nomor golongan: ${nomorGolongan}`);

// Mencetak tanggal lahir
console.log(`Tanggal lahir: ${tanggal} ${bulan1} ${tahun}`);

// Mencetak bulan lahir dalam format nama bulan
console.log(`Bulan lahir: ${bulan1}`);

//Mencetak nomor urut
console.log(`Nomor urut: ${nomorUrut}`);

// no3
let jam = 2;
let menit = 13;
let detik = 23;

const total = (jam * 3600) + (menit * 60)  + detik + 1;

const bagiJam = Math.floor(total/3600);

const total2 = total % 3600;
const bagiMenit = total2 / 60;
const ngitungMenit = Math.floor(bagiMenit);

const total3 = Math.floor(total2 % 60);

console.log(`${bagiJam}:${ngitungMenit}:${total3}`);
start.addEventListener("click", function (e) {
	waktu1.innerHTML =`${bagiJam}:${ngitungMenit}:${total3}`;
});

let jam2 = 2;
let menit2 = 13;
let detik2 = 59;

const totalBag2 = (jam2 * 3600) + (menit2 * 60)  + detik2 + 1;

const bagiJam2 = Math.floor(totalBag2/3600);

const totalBag22 = totalBag2 % 3600;
const bagiMenit2 = totalBag22 / 60;
const ngitungMenit2 = Math.floor(bagiMenit2);

const totalBag23 = Math.floor(totalBag22 % 60);

console.log(`${bagiJam2}:${ngitungMenit2}:${totalBag23}`);
start.addEventListener("click", function (e) {
	waktu2.innerHTML =`${bagiJam2}:${ngitungMenit2}:${totalBag23}`;
});

let jam3 = 2;
let menit3 = 59;
let detik3 = 59;

const totalBag3 = (jam3 * 3600) + (menit3 * 60)  + detik3 + 1;

const bagiJam3 = Math.floor(totalBag3/3600);

const totalBag32 = totalBag3 % 3600;
const bagiMenit3 = totalBag32 / 60;
const ngitungMenit3 = Math.floor(bagiMenit3);

const totalBag33 = Math.floor(totalBag32 % 60);

console.log(`${bagiJam3}:${ngitungMenit3}:${totalBag33}`);
start.addEventListener("click", function (e) {
	waktu3.innerHTML =`${bagiJam3}:${ngitungMenit3}:${totalBag33}`;
});

let jam4 = 23;
let menit4 = 59;
let detik4 = 59;

const totalBag4 = (jam4 * 3600) + (menit4 * 60)  + detik4 + 1;

const bagiJam4 = Math.floor(totalBag4/3600);

const totalBag42 = totalBag4 % 3600;
const bagiMenit4 = totalBag42 / 60;
const ngitungMenit4 = Math.floor(bagiMenit4);

const totalBag43 = Math.floor(totalBag42 % 60);

console.log(`${bagiJam4}:${ngitungMenit4}:${totalBag43}`);
start.addEventListener("click", function (e) {
	waktu4.innerHTML =`${bagiJam4}:${ngitungMenit4}:${totalBag43}`;
});
