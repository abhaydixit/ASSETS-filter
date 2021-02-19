import { signs } from "./signs.js";

const STIMULI_SIGNS = [
  "AUSTRALIA",
  "BRIDGE",
  "CHARACTER",
  "CHICAGO",
  "CIGARETTE",
  "COW",
  "CURLY",
  "DIRTY",
  "DYE",
  "FAMOUS",
  "FANCY",
  "FOCUS",
  "FORK",
  "FREE",
  "FUNERAL",
  "GIRAFFE",
  "INTERNET",
  "JESUS",
  "MIX-UP",
  "OLYMPICS",
  "PIG",
  "PUFF-SMOKE",
  "RAINBOW",
  "SALT",
  "SAVE-MONEY",
  "SCOTLAND",
  "SENTENCE",
  "SILLY",
  "STRUGGLE",
  "SUBWAY",
  "TEND",
  "WHEEL",
  "YAWN",
];
// const POSITION_RANGE = [2, 7, 13, 18, 23]
let filterReadySigns = {};

signs.forEach((sign) => {
  filterReadySigns[sign.name] = sign;
});

/* filter logic */
let results = [];
let filters = {};

export function formatSignProperty(property) {
  return Array.isArray(property) ? property.join(", ") : property;
}

async function logTime() {
  try {
    const sign = localStorage.getItem("stimuliSign");
    // const date = new Date();
    // const endTime = date.getTime();
    // localStorage.setItem("endTime", endTime);
    // const date = new Date();
    // const endTime = date.getTime();
    const endTime = Number(
      localStorage.getItem("endTime") == null
        ? new Date().getTime()
        : localStorage.getItem("endTime")
    );

    const startTime = Number(localStorage.getItem("startTime"));
    const startDate = new Date(startTime);
    const endDate = new Date(endTime);
    // time elapsed for a sign
    const timeElapsed = Math.round((endTime - startTime) / 1000);
    const signStats = {
      sign,
      startTime: startDate.toISOString(),
      endTime: endDate.toISOString(),
      timeElapsed,
      participantCode: getParameter("p"),
      signCode: getParameter("i"),
    };
    // send stats data
    // await fetch("https://signs-prototype-api.vercel.app/create", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(signStats),
    // });

    console.log(JSON.stringify(signStats));
    await fetch("http://localhost:5000/create", {
      method: "POST",
      mode: "no-cors",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signStats),
    });

    console.log("Logged time for participant", signStats);
  } catch (error) {
    console.error(error);
  } finally {
    localStorage.removeItem("endTime");
    localStorage.removeItem("startTime");
    //replaceLocation('video')
  }
}

export function signClick(name) {
  const stimuliSign = localStorage.getItem("stimuliSign");

  if (stimuliSign === name) {
    logTime();
  }
}

//
var nextBtn = document.getElementById("next");
if (nextBtn) {
  next.addEventListener("click", function () {
    console.log("Logging time now!");
    logTime();
  });
}

// adds onclick listner to result imgs to log the time
var clickedSign = document.getElementById("signs");
if (clickedSign) {
  clickedSign.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "DIV") {
      if (e.target.className === "result-image") {
        const date = new Date();
        const endTime = date.getTime();
        console.log("End time set");
        localStorage.setItem("endTime", endTime);
      }
    }
  });
}

// Added signs - start
var el = document.getElementById("videoNext");
if (el) {
  el.addEventListener("click", videoNext, false);
}
// Added signs - end

export function addSign(sign, index) {
  const elementId = `${sign.name}-${index}`;
  $(".results-grid").append(
    `<div class="result-box" id="${index}" name ="${sign.name}">
    <div class="result-image" id="${elementId}">
    </div>
    <div class="result-title">
    <p><strong>${sign.name}</strong></p>
    </div>
    <div class="sign-properties">
    <p><strong>Hands:</strong> ${formatSignProperty(sign.hands)}</p>
    <span class="seperator">|</span>
    <p><strong>Handshape:</strong> ${formatSignProperty(sign.handshape)}</p>
    <span class="seperator">|</span>
    <p><strong>Location:</strong> ${formatSignProperty(sign.location)}</p>
    <span class="seperator">|</span>
    <p><strong>Movement:</strong> ${formatSignProperty(sign.movement)}</p>
    </div>
    </div>`
  );
  let curr = document.getElementById(`${elementId}`);
  curr.style.backgroundImage = `url(.${sign.URL})`;
}

// function addInitialSign(name, index) {
//   const id = name.split(" ").join("_");
//   const elementId = `${id}-${index}`;
//   $(".results-grid").append(
//     `<div class="result-box"> <div class="result-image" id="${elementId}"></div><div class="result-title"><p> ${name} </p></div></div>`
//   );
//   let curr = document.getElementById(`${elementId}`);
//   curr.style.backgroundImage = `url(../images/${id}.gif)`;
// }

function updateResults(sign) {
  results.push(sign);
}

const filterContainers = [
  "movement-filters",
  "location-filters",
  "hands-filters",
  "handshape-filters",
];

function hideFilterContainer(containerId) {
  const filtersEl = document.getElementById(containerId);
  filtersEl.style.display = "none";
}

// Added signs - start
const filterMapping = {
  "movement-1": ["movement", "Non-Repeated", 1],
  "movement-2": ["movement", "Repeated", 2],

  "location-1": ["location", "In space", 1],
  "location-2": ["location", "Face", 2],
  "location-3": ["location", "Headside", 3],
  "location-4": ["location", "Palm", 4],
  "location-5": ["location", "Hand", 5],
  "location-6": ["location", "Arm", 6],
  "location-7": ["location", "Torso", 7],
  "location-8": ["location", "Other", 8],

  "hands-1": ["hands", "One-handed, Moving", 1],
  "hands-2": ["hands", "Two-handed, Symmetrical", 2],
  "hands-3": ["hands", "Two-handed, Asymmetrical", 3],

  "handshape-1": ["handshape", "A", 1],
  "handshape-2": ["handshape", "Open A", 2],
  "handshape-3": ["handshape", "B", 3],
  "handshape-4": ["handshape", "Open B", 4],
  "handshape-5": ["handshape", "Bent B", 5],
  "handshape-6": ["handshape", "C", 6],
  "handshape-7": ["handshape", "D", 7],
  "handshape-8": ["handshape", "E", 8],
  "handshape-9": ["handshape", "F", 9],
  "handshape-10": ["handshape", "Open F", 10],
  "handshape-11": ["handshape", "G", 11],
  "handshape-12": ["handshape", "H", 12],
  "handshape-13": ["handshape", "I", 13],
  "handshape-14": ["handshape", "K", 14],
  "handshape-15": ["handshape", "L", 15],
  "handshape-16": ["handshape", "Bent L", 16],
  "handshape-17": ["handshape", "M", 17],
  "handshape-18": ["handshape", "N", 18],
  "handshape-19": ["handshape", "Open N", 19],
  "handshape-20": ["handshape", "O", 20],
  "handshape-21": ["handshape", "Baby O", 21],
  "handshape-22": ["handshape", "Flattened O", 22],
  "handshape-23": ["handshape", "R", 23],
  "handshape-24": ["handshape", "S", 24],
  "handshape-25": ["handshape", "T", 25],
  "handshape-26": ["handshape", "V", 26],
  "handshape-27": ["handshape", "Bent V", 27],
  "handshape-28": ["handshape", "W", 28],
  "handshape-29": ["handshape", "X", 29],
  "handshape-30": ["handshape", "Y", 30],
  "handshape-31": ["handshape", "L1", 31],
  "handshape-32": ["handshape", "1L", 32],
  "handshape-33": ["handshape", "1", 33],
  "handshape-34": ["handshape", "3", 34],
  "handshape-35": ["handshape", "Bent 3", 35],
  "handshape-36": ["handshape", "4", 36],
  "handshape-37": ["handshape", "5", 37],
  "handshape-38": ["handshape", "Bent 5", 38],
  "handshape-39": ["handshape", "8", 39],
  "handshape-40": ["handshape", "Open 8", 40],
};

const baseFilters = document.getElementById("base-filters");
if (baseFilters) {
  baseFilters.addEventListener("click", (event) => {
    console.log(event.target.nodeName);
    if (event.target.nodeName === "BUTTON") {
      console.log(event.target.name);
      toggleFilters(event.target.name);
    } else if (
      event.target.nodeName === "P" ||
      event.target.nodeName === "IMG"
    ) {
      const elFilterByType = filterMapping[event.target.id];
      console.log(elFilterByType);
      filterByType(elFilterByType[0], elFilterByType[1], elFilterByType[2]);
    } else if (event.target.nodeName === "IMG") {
    } else {
      return;
    }
  });
}
// Added signs - end

// Adds styling to the selected img in handshape filter
$(function () {
  selectHandsigns();
});

function selectHandsigns() {
  $("#handshape-filters img")
    .each(function (i, el) {
      $(this).addClass("select-img-filter");
    })
    .click(function () {
      var $img = $(this).toggleClass("clicked");
    });
}

function toggleFilters(containerId) {
  const filtersEl = document.getElementById(containerId);
  const clearEl = document.getElementById("clear");

  const imgContainer = document.querySelector(".image-column");
  // hide other filter containers and toggle only the filter container with the containerId
  filterContainers
    .filter((id) => id !== containerId)
    .forEach((id) => hideFilterContainer(id));

  // toggle the display property of the filter-container
  filtersEl.style.display = `${
    filtersEl.style.display === "none" || filtersEl.style.display === ""
      ? "flex"
      : "none"
  }`;

  imgContainer.style.display = `${
    filtersEl.style.display === "flex" || filtersEl.style.display === ""
      ? "grid"
      : "none"
  }`;

  // toggle display of clear all button based on the display of filter-container
  clearEl.style.display = `${
    filtersEl.style.display === "flex" ? "block" : "none"
  }`;
}

var elClear = document.getElementById("clear");
if (elClear) {
  elClear.addEventListener("click", clearFilters, false);
}

/** clear all filters */
function clearFilters() {
  const errorMessageEl = document.getElementById("error-message");
  errorMessageEl.style.display = "none";
  filters = [];
  const filterElements = document.querySelectorAll(".filter-column p");
  filterElements.forEach((element) => (element.style.fontWeight = "normal"));
  filterContainers.forEach((containerId) => hideFilterContainer(containerId));
  // hide clear all button
  const clearEl = document.getElementById("clear");
  clearEl.style.display = "none";

  // deSelectHandSigns();

  // signs container
  // remove all child nodes of signs container
  $(".results-grid")[0].innerHTML = "";
  const localSigns = JSON.parse(localStorage.getItem("signs"));
  console.log(localSigns);
  localSigns.forEach((sign, index) => addSign(filterReadySigns[sign], index));

  // update the number of signs in the UI
  $(".number-of-signs").text(localSigns.length);
  let imgContainer = document.querySelector(".image-column");
  imgContainer.style.display = "none";
  let container = document.querySelector(".filter-container");
  container.style.display = "none";
  let images = document.querySelectorAll(`.image-column img`);
  if (images) {
    // images.forEach((img) => (img.style.border = "none"));
    images.forEach((img) => $(img).removeClass("clicked"));
  }
}

function getParameter(p) {
  let parsedUrl = new URL(window.location.href);
  const code = Number(parsedUrl.searchParams.get(p));
  // if (code && code <= 5) {
  //   return code;
  // } else if (code > 5) {
  //   return code % 5;
  // } else {
  //   return 1;
  return code;
  //}
}

/**
  @param {String} type
  @param {String | Number} value
  @param {Number} index (position of the filter element)
*/
function filterByType(type, value, index = 0) {
  results = [];
  const localSigns = JSON.parse(localStorage.getItem("signs"));
  const user_signs = localSigns
    .map((signName) => {
      return filterReadySigns[signName];
    })
    .filter((sign) => sign !== undefined);

  // signs container
  const signsContainer = document.getElementById("signs");
  // remove all child nodes of signs container
  signsContainer.innerHTML = "";

  document.getElementById(`${type}-${index}`).style.fontWeight = "bold";
  let img = document.querySelector(`#${type}-${index} img`);
  if (img) {
    img.style.border = "1px solid #000";
  }

  // update filters
  // check if filters object has a key (type)
  if (filters[type]) {
    if (!filters[type].includes(value)) {
      filters[type].push(value);
    } else {
      // remove that value from type
      document.getElementById(`${type}-${index}`).style.fontWeight = "normal";
      if (img) {
        img.style.border = "none";
      }
      filters[type] = filters[type].filter((val) => val !== value);
    }
  } else {
    filters[type] = [value];
  }

  user_signs.forEach((sign) => {
    if (sign) {
      const filterTypes = Object.keys(filters);
      if (filterTypes.length > 0) {
        let signMatched = [];
        filterTypes.forEach((type) => {
          filters[type].forEach((val) => {
            if (val === sign[type]) {
              signMatched.push(true);
            } else {
              signMatched.push(false);
            }
          });
        });

        if (!signMatched.includes(false)) {
          updateResults(sign);
        }
      } else {
        updateResults(sign);
      }
    }
  });

  const errorMessageEl = document.getElementById("error-message");

  if (results.length === 0) {
    $(".results-grid-container").innerHTML = "";
    $(".results-grid-container").height(0);
    errorMessageEl.style.display = "flex";
    errorMessageEl.textContent = "No signs found. Update your filters!";
  } else {
    errorMessageEl.style.display = "none";

    const topResults = results.filter((result) => {
      return result[type] === value;
    });

    const topSigns = topResults.map((result) => result.name);

    let bottomResults = results.filter(
      (result) => !topSigns.includes(result.name)
    );

    console.log(topResults.length, bottomResults.length, results.length);

    results = topResults.concat(bottomResults);

    // loop through the results and create a div with an img element for each sign
    // append the above elements to signs container
    results.forEach((sign, index) => {
      addSign(sign, index);
    });
  }

  // update the number of signs in the UI
  $(".number-of-signs").text(results.length);
}
