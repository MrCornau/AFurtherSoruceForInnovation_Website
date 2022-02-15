window.onload = function () {
  if (!sessionStorage.consent) {
    sessionStorage.consent = 10;
  } else {
    sessionStorage.consent = 20;
  }
  console.log(sessionStorage.consent);
  if (sessionStorage.consent == 10) {
    document.getElementById("consent-container").classList.remove("notLoaded");
  }
};

console.log(window.dataLayer.find((element) => element["gtm.start"]));
console.log("test");

document
  .getElementById("button-accept")
  .addEventListener("click", consentGranted);

document
  .getElementById("button-discard")
  .addEventListener("click", consentNotGranted);

function consentGranted() {
  document.getElementById("consent-container").classList.add("notLoaded");
  gtag("consent", "update", {
    ad_storage: "granted",
    analytics_storage: "granted",
  });
  sessionStorage.consent = 20;
  console.log("consentGranted");
}

function consentNotGranted() {
  document.getElementById("consent-container").classList.add("notLoaded");
  sessionStorage.consent = 20;
  console.log("consentDiscard");
}

let first = () => {
  consent = false;
};
