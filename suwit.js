//pilihan computer

function computer() {
  const comp = Math.random();
  if (comp < 0.34) return "semut";
  if (comp > 0.34 && comp < 0.64) return "orang";
  return "gajah";
}
function hasil(comp, player) {
  if (comp == player) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "gajah" ? "MENANG" : "KALAH";
  if (player == "orang") return comp == "semut" ? "MENANG" : "KALAH";
}

const info = document.querySelector(".info");

//versi simpel
const pilihan = document.querySelectorAll("li img");
pilihan.forEach((el) => {
  el.addEventListener("click", (e) => {
    const com = computer();
    const gambar = document.querySelector(".img-komputer");
    gambar.setAttribute("src", `img/${com}.png`);
    const p = el.className;
    const hasilAll = hasil(com, p);
    info.innerHTML = hasilAll;
  });
});

//versi tidak simple
// const gajah = document.querySelector(".gajah");
// const orang = document.querySelector(".orang");
// const semut = document.querySelector(".semut");

// gajah.addEventListener("click", () => {
//   const com = computer();
//   const gambar = document.querySelector(".img-komputer");
//   gambar.setAttribute("src", `img/${com}.png`);
//   const p = gajah.className;
//   const hasilG = hasil(com, p);
//   info.innerHTML = hasilG;
// });
// orang.addEventListener("click", () => {
//   const com = computer();
//   const gambar = document.querySelector(".img-komputer");
//   gambar.setAttribute("src", `img/${com}.png`);
//   const p = orang.className;
//   const hasilO = hasil(com, p);
//   info.innerHTML = hasilO;
// });
// semut.addEventListener("click", () => {
//   const com = computer();
//   const gambar = document.querySelector(".img-komputer");
//   gambar.setAttribute("src", `img/${com}.png`);
//   const p = semut.className;
//   const hasilS = hasil(com, p);
//   info.innerHTML = hasilS;
// });
