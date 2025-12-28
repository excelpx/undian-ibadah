const namaEvent = localStorage.getItem("eventName");
const maxNumber = parseInt(localStorage.getItem("maxNumber"));

document.getElementById("judul").innerText = namaEvent || "Nama Event";

let angkaTersedia = [];
let rolling = false;
let interval;
let riwayat = [];

for (let i = 1; i <= maxNumber; i++) {
    angkaTersedia.push(i);
}

function toggleUndi() {
    if (!rolling) mulai();
    else berhenti();
}

function mulai() {
    if (angkaTersedia.length === 0) {
        document.getElementById("hasil").innerText = "HABIS";
        return;
    }

    rolling = true;

    interval = setInterval(() => {
        const acak = Math.floor(Math.random() * maxNumber) + 1;
        document.getElementById("hasil").innerText = acak;
    }, 40);
}

function berhenti() {
    clearInterval(interval);
    rolling = false;

    const index = Math.floor(Math.random() * angkaTersedia.length);
    const hasil = angkaTersedia[index];

    angkaTersedia.splice(index, 1);
    riwayat.push(hasil);

    document.getElementById("hasil").innerText = hasil;
    updateRiwayat();
}

function updateRiwayat() {
    const ul = document.getElementById("riwayat");
    ul.innerHTML = "";

    riwayat.forEach((n, i) => {
        const li = document.createElement("li");
        li.innerText = `${i + 1}. ${n}`;
        ul.appendChild(li);
    });
}

// HOTKEY: SPACE
document.addEventListener("keydown", e => {
    if (e.code === "Space") {
        e.preventDefault();
        toggleUndi();
    }
});

// RESET
function resetUndian() {
    if (!confirm("Reset semua undian?")) return;

    angkaTersedia = [];
    riwayat = [];

    for (let i = 1; i <= maxNumber; i++) {
    }
}