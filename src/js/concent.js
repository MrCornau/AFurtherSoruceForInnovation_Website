// if (window.dataLayer) {

let consent = false;

if (!consent) {
  window.onload = function () {
    document.getElementById("consent-container").classList.remove("notLoaded");
  };
}

console.log(window.dataLayer.find((element) => element["gtm.start"]));
console.log("test");

document
  .getElementById("button-accept")
  .addEventListener("click", consentGranted);

function consentGranted() {
  document.getElementById("consent-container").classList.add("notLoaded");
  gtag("consent", "update", {
    ad_storage: "granted",
  });
  console.log(window.dataLayer.find((element) => element["consent"]));
  consent = true;
}
function consentNotGranted() {
  document.getElementById("consent-container").classList.add("notLoaded");
  console.log(window.dataLayer.find((element) => element["consent"]));
  consent = true;
}
