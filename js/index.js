function luas() {
    const tinggi = document.getElementById('tinggi');
    const alas = document.getElementById('alas');
    const hitungluas = document.getElementById('hitungluas');
    const outputluas = document.getElementById('outputluas');
    let t = tinggi.value
    let a = alas.value
    if (tinggi.value == "") {
        alert("Masukkan tinggi segitiga!");
    } else if (alas.value == "") {
        alert("Masukkan alas segitiga!");
    } else {
        let l = 0.5*a*t
        outputluas.innerHTML = `Luas segitiga dari alas = ${a} cm dan tinggi = ${t} cm adalah ${l} cm2`
    }
}

function keliling() {
    const sisi1 = document.getElementById('sisi1');
    const sisi2 = document.getElementById('sisi2');
    const sisi3 = document.getElementById('sisi3');
    const hitungkel = document.getElementById('hitungkel');
    const outputkel = document.getElementById('outputkel');
    let s1 = sisi1.value
    let s2 = sisi2.value
    let s3 = sisi3.value
    if (sisi1.value == "") {
        alert("Masukkan sisi 1 segitiga!");
    } else if (sisi2.value == "") {
        alert("Masukkan sisi 2 segitiga!");
    } else if (sisi3.value == "") {
        alert("Masukkan sisi 3 segitiga!");
    } else {
        let k = parseFloat(s1)+parseFloat(s2)+parseFloat(s3)
        outputkel.innerHTML = `Keliling segitiga dari sisi 1 = ${s1} cm, sisi 2 = ${s2}, dan sisi 3 = ${s3} cm adalah ${k} cm`
    }
}

function resetluas() {
    const alas = document.getElementById('alas');
    const tinggi = document.getElementById('tinggi');
    const hitungluas = document.getElementById('hitungluas');
    alas.value = null;
    tinggi.value = null;
    hitungluas.value = null;
    document.getElementById('alas') = alas.value;
    document.getElementById('tinggi') = tinggi.value;
    document.getElementById('hitungluas') = hitungluas.value;
}

function resetkel() {
    const sisi1 = document.getElementById('sisi1');
    const sisi2 = document.getElementById('sisi2');
    const sisi3 = document.getElementById('sisi3');
    const hitungkel = document.getElementById('hitungkel');
    sisi1.value = null;
    sisi2.value = null;
    sisi3.value = null;
    hitungkel.value = null;
    document.getElementById('s1') = alas.value;
    document.getElementById('s2') = tinggi.value;
    document.getElementById('s3') = s3.value;
    document.getElementById('hitungkel') = hitungkel.value;
}