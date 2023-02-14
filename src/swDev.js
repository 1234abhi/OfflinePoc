export default function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register(swUrl)
        .then((res) => console.log("Service Worker: Registered (Pages)"))
        .catch((err) => console.log(`Service Worker: Error: ${err}`));
    });
  }
}
