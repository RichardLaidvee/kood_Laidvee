// Ülesanne 1
function harjutus1(nimi) {
    console.log("Tere, " + nimi + "!");
}

// Ülesanne 2
function harjutus2(mark, mudel, värv) {
    console.log("Minu auto on " + värv + " " + mark + " " + mudel + ".");
}

// Ülesanne 3
function harjutus3(põhjaPindala, kõrgus) {
    let ruumala = (põhjaPindala * kõrgus) / 3;
    console.log("Püramiidi ruumala on " + ruumala + ".");
}

// Ülesanne 4
function harjutus4(nimi) {
    if (nimi.length > 5) {
        return nimi.slice(0, 5) + "...";
    } else {
        return nimi;
    }
}

// Ülesanne 5
function harjutus5(sõne) {
    return sõne.split('').reverse().join('');
}

// Ülesanne 6
function harjutus6() {
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }
}

// Ülesanne 7
function harjutus7() {
    let i = 100;
    while (i >= 1) {
        console.log(i);
        i--;
    }
}

// Ülesanne 10
let myNameComponents = ['Samuel', 'L', 'Jackson'];
console.log("Minu nimi on " + myNameComponents.join(" ") + ".");

// Ülesanne 11
function harjutus11(hinded) {
    let summa = 0;
    for (let hinne of hinded) {
        summa += hinne;
    }
    let keskmine = summa / hinded.length;
    console.log("Keskmine hinne on " + keskmine + ".");
}

// Ülesanne 12
function harjutus12() {
    for (let i = 1; i <= 100; i++) {
        if (i === 50) {
            console.log("Tallinna Prantsuse Lütseum");
        } else if (i % 3 === 0 && i % 5 === 0) {
            console.log("Lütseum");
        } else if (i % 3 === 0) {
            console.log("Tallinna");
        } else if (i % 5 === 0) {
            console.log("Prantsuse");
        }
    }
}

// Ülesanne 13
function harjutus13(massiiv) {
    if (massiiv.includes("Marek")) {
        console.log("Marek on massiivis");
    } else {
        console.log("Marek pole massiivis");
    }
}

// Ülesanne 14
let inimesed = [
    {
        nimi: 'Alice',
        vanus: 28,
        aadress: 'Pargi 7',
        telefon: '23857493',
        email: 'alice@eesti.ee'
    },
    {
        nimi: 'Bob',
        vanus: 32,
        aadress: 'Tänavaküla 12',
        telefon: '293463847',
        email: 'bob@gmail.com'
    },
    {
        nimi: 'Marek',
        vanus: 22,
        aadress: 'Metsatee 3',
        telefon: '8594032',
        email: 'marek@example.com'
    }
];

function harjutus14(inimesed) {
    let vanim = inimesed[0];
    let pikimAadress = inimesed[0];
    let lühimTelefon = inimesed[0];
    let eestiEmail = null;

    for (let inimene of inimesed) {
        if (inimene.vanus > vanim.vanus) {
            vanim = inimene;
        }
        if (inimene.aadress.length > pikimAadress.aadress.length) {
            pikimAadress = inimene;
        }
        if (inimene.telefon.length < lühimTelefon.telefon.length) {
            lühimTelefon = inimene;
        }
        if (inimene.email.includes("eesti")) {
            eestiEmail = inimene;
        }
    }

    console.log("Kõige vanem: " + vanim.nimi);
    console.log("Pikima aadressiga: " + pikimAadress.nimi);
    console.log("Lühima telefoninumbriga: " + lühimTelefon.nimi);
    if (eestiEmail) {
        console.log("E-post sisaldab sõna 'eesti': " + eestiEmail.nimi);
    }
}

