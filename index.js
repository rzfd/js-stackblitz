// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let alas = prompt('Masukkan alas');
let tinggi = prompt('Masukkan tinggi');
let luas = 0.5 * alas * tinggi;

appDiv.innerHTML = `<h1>Menghitung luas segitiga</h1>`;
console.log(`luas segitiga = ${luas} cm square`);
appDiv.innerHTML = `<h1><u>Menghitung luas segitga</u></h1>
<br>
Luas Segitiga = 0.5 x ${alas} x ${tinggi}cm = ${luas}
cm<sup>2</sup>`;
