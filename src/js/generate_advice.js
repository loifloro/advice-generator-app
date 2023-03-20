export function generate_advice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => {
      document.getElementById("advice__id").innerHTML = data.slip.id;
      document.getElementById("advice__content").innerHTML = data.slip.advice;

      console.log(data);
    });
}
