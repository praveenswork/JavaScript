export function backend() {
  //   const xml = new XMLHttpRequest();

  //   xml.addEventListener("load", () => {
  //     console.log(JSON.stringify(xml.response));
  //   });

  //   xml.open("GET", "https://supersimplebackend.dev/greeting");
  //   xml.send();

  fetch("https://supersimplebackend.dev/greeting").then((response) => {
    return response.text().then((data) => {
      console.log(data);
    });
  });
}
