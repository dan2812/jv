"use strict";

const numberOfSeats = prompt("Ввести число необходимых мест");

console.log(+numberOfSeats);
if (Number.isInteger(+numberOfSeats)) {
  if (numberOfSeats <= 6) {
    const taba = confirm("we have place in Taba gruoup");
    if (taba) {
      alert("Приятного путешествия в группе Taba");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfSeats > 6 && numberOfSeats <= 15) {
    const sharm = confirm("we have place in Sharm gruoup");
    if (sharm) {
      alert("Приятного путешествия в группе Sharm");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else if (numberOfSeats > 15 && numberOfSeats <= 25) {
    const hurgada = confirm("we have place in Hurgada gruoup");
    if (hurgada) {
      alert("Приятного путешествия в группе Hurgada");
    } else {
      alert("Нам очень жаль, приходите еще!");
    }
  } else {
    alert("Извините, столько мест нет ни в одной группе!");
  }
} else {
  alert("Ошибка ввода");
}