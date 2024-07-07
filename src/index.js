import "./styles.css";

// document.getElementsByClassName("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use Parcel to bundle this sandbox, you can find more info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;
let x = document.querySelector(".app");
let body = document.querySelector("body");
let z = x.outerHTML;
let n = 100;
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function startTimer(duration, display) {
  var timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = 0;
      // timer = duration; // uncomment this line to reset timer automatically after reaching 0
    }
  }, 1000);
}

// window.addEventListener("load", function () {
var time = 3600, // your time in seconds here
  display = document.querySelector("#safeTimerDisplay");
startTimer(time, display);
// });

for (let i = 0; i < n; i++) {
  body.insertAdjacentHTML("beforeend", z);
  let z2 = body.querySelectorAll(".app");
  let z1 = z2[z2.length - 1];
  z1.classList.remove("d-none");
  let firstNumber = Math.random() * 9 + 1;
  let secondNumber = Math.random() * 9 + 1;
  let nedW = Math.random() * firstNumber + 1;
  let thirdNumber = nedW >= 10 ? nedW - 1 : nedW;
  let fourthNumber = Math.random() * 9 + 1;
  z1.querySelector(".first").innerHTML = parseInt(firstNumber);
  z1.querySelector(".second").innerHTML = parseInt(secondNumber);
  z1.querySelector(".third").innerHTML = parseInt(thirdNumber);
  z1.querySelector(".fourth").innerHTML = parseInt(fourthNumber);
  z1.querySelector(".answer").innerHTML =
    parseInt(firstNumber) +
    parseInt(secondNumber) -
    parseInt(thirdNumber) +
    parseInt(fourthNumber);
  let nw = z1.querySelector(".answer-input");
  console.log(nw);
  // alert(1);

  let re = document.querySelector("#button");
  re.addEventListener("click", () => {
    let x = document.querySelectorAll(".app");
    let zCount = Array.from(x).filter((z) => {
      let n =
        z.querySelector(".answer").innerHTML ===
        z.querySelector(".answer-input").value;
      if (n) {
        z.classList.add("bkg-green");
        z.classList.remove("bkg-red");
      } else {
        z.classList.add("bkg-red");
        z.classList.remove("bkg-green");
      }
      return n;
    });
    document.querySelector("#result").innerHTML = zCount.length;
    // alert(`${zCount.length}/100 is correct`);
  });
  // nw.addEventListener("input", (e) => {
  //   // alert(1);
  //   if (e.target.value === z1.querySelector(".answer").innerHTML) {
  //     z1.classList.add("bkg-green");
  //     z1.classList.remove("bkg-red");
  //   } else {
  //     z1.classList.add("bkg-red");
  //     z1.classList.remove("bkg-green");
  //   }
  // });
}
