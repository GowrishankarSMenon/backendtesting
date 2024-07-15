import React from "react";

const countDown = (durationInSeconds) => {
  let timerInterval = setInterval(() => {
    let currentTime = Date.now();
    elapsedTime =
      durationInSeconds - Math.floor((currentTime - startTime) / 1000);

    // Save the elapsed time to local storage
    localStorage.setItem("elapsedTime", elapsedTime);

    updateTimer(elapsedTime);

    if (elapsedTime <= 0) {
      clearInterval(timerInterval);
      // Optionally, clear local storage after the timer expires
      console.log("remobehh");
      localStorage.removeItem("timerStartTime");
      localStorage.removeItem("elapsedTime");
      localStorage.removeItem("login");
      localStorage.removeItem("token_Key");
      window.location.href = "/";
    }
  }, 1000);

  const updateTimer = (seconds) => {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;

    if (remainingSeconds < 10) {
      remainingSeconds = `0${remainingSeconds}`;
    }

    // console.log(`Time remaining: ${minutes}:${remainingSeconds}`);

    if (seconds <= 0) {
      clearInterval(timerInterval);
      console.log("Time's up!");
    }
  };

  /* Retrieve start time and elapsed time from local storage */
  let startTime = localStorage.getItem("timerStartTime");
  let elapsedTime = localStorage.getItem("elapsedTime");

  /* If there's no start time, set the initial values */
  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("timerStartTime", startTime);
    elapsedTime = durationInSeconds;
  }

  updateTimer(elapsedTime);
};

export default countDown;
