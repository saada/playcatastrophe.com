// Detects if device is on iOS
var userAgent = window.navigator.userAgent;
const isIos = /iphone|ipad|ipod/i.test(userAgent);
const isAndroid = /android/i.test(userAgent);
// Detects if device is in standalone mode
const isInStandaloneMode =
    ("standalone" in window.navigator && window.navigator.standalone) ||
    window.matchMedia("(display-mode: standalone)").matches ||
    document.referrer.includes("android-app://");

AddToHomeScreen({
    show: !isInStandaloneMode && (isIos || isAndroid),
    brandName: "cat'astrophe",
    backgroundColor: "rgba(53, 51, 51, 0.95)", //"#2c2c2c",
    color: "#fff",
    padding: "2em",
    logoImage: "<image/>", //"<image src='images/share.png' height='50'>",
    htmlContent: `
<strong style='font-size: 1.5em'>To play in fullscreen mode</strong>
<div style='margin-top: 0.5em'>
  <div style='margin-top: 0.5em; display: flex; justify-content: space-between; align-items: center'>
    <div style='font-size: 1em'>1. Tap the ${isIos ? "share" : "menu"} icon ${
          isIos ? "below" : "above"
        }</div>
    <image src='${
      isIos ? "./images/share.png" : "./images/ellipsis.jpg"
    }' width='15'/>
  </div>
  <div style='margin-top: 0.5em; display: flex; justify-content: space-between; align-items: center'>
    <div style='font-size: 1em'>2. Scroll and press <strong>Add to Home Screen</strong></div>
    <image src='./images/add.png' width='15'/>
  </div>
</div>
`,
});
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js");
}