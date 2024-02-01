// no1
const karyawan = "ijat";
const gajipokok = 1200000;
const tunjangan = 0.20 * gajipokok;
const pajak = 0.15 * (gajipokok + tunjangan);

const gajibersih = gajipokok + tunjangan - pajak;

console.log(`jadi gaji bersihnya ${gajibersih}`)

// no2
const jam = 1;
const menit = 30;
const detik = 40;

const totaldetik = jam * 3600 + menit * 60 + detik;

console.log(`total detiknya ${totaldetik}`)

// no3
const totaldetik1 = 5440;
const bagijam = Math.floor(totaldetik1 / 3600);

const totaldetik2 = totaldetik1 % 3600;
const bagimenit = totaldetik2 / 60;
const ngitungmenit = Math.floor(bagimenit);

const totaldetik3 = Math.floor(totaldetik2 % 60);

console.log(totaldetik2);
console.log(`${bagijam}jam ${ngitungmenit}menit ${totaldetik3}detik`);
 