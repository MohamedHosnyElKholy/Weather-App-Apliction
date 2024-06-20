let input = document.querySelector('.input-wethear');
let apiKey = 'b97dda817f1d4b50a21112043241406';

input.addEventListener('input', (e)=> {
  const tirm = e.target.value;
  if (tirm.length > 4 || tirm.length === 0) {
    wethear(tirm);
  }
})



async function wethear(city) {
  try{
    if (!city) {
      return;
    }
    let fetchs = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`);
    let data = await fetchs.json();
    let allData = data.forecast.forecastday;
    let cartona = '';
    for (let i = 0; i < allData.length; i++) {
        let date = new Date(allData[i].date);
        let dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
        let monthName = date.toLocaleDateString('en-US', { month: 'short' });
        let numDayd = date.getDate();
        if (i === 0) {
            cartona += `
            <div class="col-md-4">
                <div class="one">
                  <div class="heade-one d-flex justify-content-between align-items-center">
                    <div class="day">
                      ${dayName}
                    </div>
                    <div class="data">${numDayd} ${monthName}</div>
                  </div>
                  <div class="one-content h-100">
                    <div class="location">${city}</div>
                    <div class="num text-white">${allData[i].day.maxtemp_c}<sup>o<sup></div>
                    <img src="${allData[i].day.condition.icon}" alt="">
                    <div class="custom text-info fw-bold mt-3 mb-3">${allData[i].day.condition.text}</div>
                    <div class="summary">
                      <span class="me-3 summr">
                        <img src="./image/icon-umberella.png" alt="">
                       ${allData[i].day.daily_chance_of_rain}%
                      </span>
                      <span class="me-3 summr">
                        <img src="./image/icon-wind.png" alt="">
                        ${allData[i].day.maxwind_kph}km/h
                      </span>
                      <span class="me-3 summr">
                        <img src="./image/icon-compass.png" alt="">
                        East
                      </span>
                    </div>
                  </div>
                </div>
            </div>
            `;
        } else if (i === 1) {
            cartona += `
            <div class="col-md-4">
                <div class="two">
                  <div class="day-two text-light text-center">
                    ${dayName}
                  </div>
                  <div class="content-two h-100 d-flex justify-content-center align-items-center flex-column">
                    <img src="${allData[i].day.condition.icon}" class="mb-4" alt="">
                    <div class="degree text-light fs-5 fw-bold">${allData[i].day.maxtemp_c} <sup>o</sup></div>
                    <div class="small">${allData[i].day.mintemp_c}<sup>o</sup></div>
                    <div class="custom text-info">${allData[i].day.condition.text}</div>
                  </div>
                </div>
            </div>
            `;
        } else {
            cartona += `
            <div class="col-md-4">
                <div class="three">
                  <div class="heade-three text-center">
                  ${dayName}
                  </div>
                  <div class="content-three h-100 d-flex justify-content-center align-items-center flex-column">
                    <img src="${allData[i].day.condition.icon}" alt="">
                    <div class="degree text-light fs-5 fw-bold">${allData[i].day.maxtemp_c}<sup>o</sup> C</div>
                    <div class="small">${allData[i].day.mintemp_c}<sup>o</sup></div>
                    <div class="custom text-info">${allData[i].day.condition.text}</div>
                  </div>
                </div>
            </div>
            `;
        }
    }
    document.getElementById('demo').innerHTML = cartona;
  } catch (error){
    console.log(error);
  }
}
wethear('cairo');

let navbartoggler = document.querySelector('.navbar-toggler');

navbartoggler.addEventListener('click', ()=> {
  navbartoggler.classList.toggle('toggle');
})