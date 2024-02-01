// No 1

let a = 1;
for (let a = 1; a <= 50; a++) {
    console.log(a);
}

// No 2

let h = 1;
for (let h = 1; h <= 50; h += 2) {
    console.log(h);
}

// No 3
let x = 1;
for (let x = 2; x <= 50; x += 2) {
  console.log(x);
}

// No 4

let p = 1;
while (p <= 50) {
  let hayu = p % 2 === 0 ? "bilangan genap" : "bilangan ganjil";
  console.log(`${p} ${hayu}`);
  p++;
}

//  No 5
let total = 0;
let bilanganTerbesar = 0;
let bilanganTerkecil = 20;

for (let i = 1; i <= 20; i++) {
  let bilangan = parseFloat(prompt(`Masukkan bilangan ke-${i}:`));
  total += bilangan;

  if (bilangan > bilanganTerbesar) {
    bilanganTerbesar = bilangan;
  }

  if (bilangan < bilanganTerkecil) {
    bilanganTerkecil = bilangan;
  }
}

let rataRata = total / 20;
console.log(`Bilangan Terbesar: ${bilanganTerbesar}`);
console.log(`Bilangan Terkecil: ${bilanganTerkecil}`);
console.log(`Rata-rata: ${rataRata}`);