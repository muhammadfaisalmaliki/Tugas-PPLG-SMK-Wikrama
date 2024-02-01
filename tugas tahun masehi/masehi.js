

// tahun kabisat kabisatan
// do while
let tahun = 1600;
do {
if (tahun % 4 === 0 && (tahun % 100 !== 0 || tahun % 400 === 0)) {
	console.log(`${tahun} adalah tahun kabisat`);
} else {
	console.log(`${tahun} bukan tahun kabisat`);
}
tahun += 4;
}while(tahun <= 2023);

// for while
for (let tahunnn = 1600; tahunnn <= 2023; tahunnn += 4) {
if (tahunnn % 4 === 0 && (tahunnn % 100 !== 0 || tahunnn % 400 === 0)) {
	console.log(`${tahunnn} adalah tahun kabisat`);
} else {
	console.log(`${tahunnn} bukan tahun kabisat`);
}
}

// while
let tahunn = 1600;
while(tahunn <= 2023) {

if (tahunn % 4 === 0 && (tahunn % 100 !== 0 || tahunn % 400 === 0)) {
	console.log(`${tahunn} adalah tahun kabisat`);
} else {
	console.log(`${tahunn} bukan tahun kabisat`);
}
tahunn += 4
}