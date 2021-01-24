fetch(
  "https://api.nasa.gov/insight_weather/?api_key=yqhLhEsvHwxQuxrqhhAgVRGLkZUtZP4E7Zkbir3k&feedtype=json&ver=1.0"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayWeather(data);
  })
  .catch(function (error) {
    console.log(error);
  });

function displayWeather(weather) {
  const resultSol = weather.sol_keys;
  const mostRecentContainer = document.querySelector("#most-recent-report");
  const moreReportsContainer = document.querySelector("#more-reports");

  let sol;
  let fullDate;
  let numberedMonth;
  let month;
  let date;
  let highTemp;
  let lowTemp;
  let html;

  for (let i = 6; i > 2; i--) {
    sol = resultSol[i];

    fullDate = weather[sol].First_UTC;
    numberedMonth = fullDate.substring(5, 7);

    switch (numberedMonth) {
      case "01":
        month = "Jan";
        break;
      case "02":
        month = "Feb";
        break;
      case "03":
        month = "March";
        break;
      case "04":
        month = "April";
        break;
      case "05":
        month = "May";
        break;
      case "06":
        month = "June";
        break;
      case "07":
        month = "July";
        break;
      case "08":
        month = "Aug";
        break;
      case "09":
        month = "Sep";
        break;
      case "10":
        month = "Oct";
        break;
      case "11":
        month = "Nov";
        break;
      case "12":
        month = "Dec";
    }

    date = fullDate.substring(8, 10);

    (function () {
      highTemp = weather[sol].PRE.mx;
      highTemp = highTemp.toString();
      highTemp = highTemp.split(".")[0];
    })();

    (function () {
      lowTemp = weather[sol].PRE.mn;
      lowTemp = lowTemp.toString();
      lowTemp = lowTemp.split(".")[0];
    })();

    if (i === 6) {
      mostRecentContainer.innerHTML += `<div class="mars-date row">
                    <span class="sol">Sol ${sol}</span>
                    <span>${month} ${date}</span>
                </div>
                <div class="mars-temp row">
                    <span>High: ${highTemp} &#8451</span>
                    <span>Low: ${lowTemp} &#8451</span>
                </div>`;
    } else {
      moreReportsContainer.innerHTML += `<div class="report-div row">
                    <div class="mars-date">
                        <span class="sol">Sol ${sol}</span>
                        <span>${month} ${date}</span>
                    </div>
                    <div class="mars-temp">
                        <span>High: ${highTemp} &#8451</span>
                        <span>Low: ${lowTemp} &#8451</span>
                    </div>
                </div>`;
    }
  }
}
