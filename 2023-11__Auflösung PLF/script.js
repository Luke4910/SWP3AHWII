const überschriftenArtikel = document.querySelectorAll(
  "div.news-articles > article > h2"
);

überschriftenArtikel.forEach((überschrift) => {
  überschrift.addEventListener("click", function (ereignis) {
    const angeklickteÜberschrift = ereignis.target;
    const artikelBehälter = angeklickteÜberschrift.parentElement;
    const kindElemente = artikelBehälter.children;
    const artikelInhalt = kindElemente[0];
    artikelInhalt.istErweitert = !artikelInhalt.istErweitert;

    const sichtbarkeit = artikelInhalt.istErweitert ? "visible" : "hidden";
    const position = artikelInhalt.istErweitert ? "static" : "absolute";
    const hintergrundFarbe = artikelInhalt.istErweitert ? "lightgreen " : "";
    const schriftFarbe = artikelInhalt.istErweitert ? "black" : "";

    for (let i = 1; i < kindElemente.length; i++) {
      kindElemente[i].style.visibility = sichtbarkeit;
      kindElemente[i].style.position = position;
    }

    artikelBehälter.style.backgroundColor = hintergrundFarbe;
    artikelBehälter.style.color = schriftFarbe;
  });
});
const paragraphContainer = document.getElementById("news-articles");
const paragraphs = paragraphContainer.querySelectorAll("p");

for (let i = paragraphs.length - 1; i >= 0; i--) {
  const paragraph = paragraphs[i];
  paragraphContainer.removeChild(paragraph);
  paragraphContainer.appendChild(paragraph);
}
