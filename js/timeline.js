fetch("https://api.spacexdata.com/v3/launches/past")
  .then(function (response) {
    return response.json();
  })
  .then(function (json) {
    displayLaunch(json);
  })
  .catch(function (error) {
    console.dir(error);
  });

function displayLaunch(json) {
  const results = json.reverse();
  const container = document.querySelector("#previous-missions");
  for (let i = 0; i < 20; i++) {
    let fullLaunchDate = results[i].launch_date_local;
    let launchDate = fullLaunchDate.substring(0, 10);
    let missionName = results[i].mission_name;
    let details = results[i].details;

    container.innerHTML += `<div class="launch rectangle">
                                    <span class="line"></span>
                                    <span class="circle"></span>
                                    <span class="launch-date">${launchDate}</span>
                                    <h3 class="mission-name">${missionName}</h3>
                                    <p class="details">${details}</p>
                                </div>`; // yeah nice, one liner.
  }
}
