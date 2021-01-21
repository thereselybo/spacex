function updateTimer() {
  const deadline = new Date("2025-01-01").getTime();
  const today = new Date().getTime();

  const timeLeft = deadline - today;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector("#days").innerText = days;
  document.querySelector("#hours").innerText = hours;
  document.querySelector("#minutes").innerText = minutes;
  document.querySelector("#seconds").innerText = seconds;

  const minText = document.querySelector("#minutes-text");
  const secText = document.querySelector("#seconds-text")

  if(window.matchMedia('(max-width: 639px)').matches) {
      minText.innerText = "Mins";
      secText.innerText = "Secs";
  } else {
    minText.innerText = "Minutes";
    secText.innerText = "Seconds";
  }

  let success;

  if (timeLeft === 0) {
    clearInterval(countdown);
    if (success) {
      document.querySelector(
        ".countdown p"
      ).innerText += ` He has now succeeded. Huzzah`;
    } else {
      document.querySelector(
        ".countdown p"
      ).innerText += ` He has now failed. Damn it Elon`;
    }
  }
}

const countdown = setInterval(updateTimer, 1000);
