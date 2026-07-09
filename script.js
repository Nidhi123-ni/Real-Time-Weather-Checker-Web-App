        const cityname=document.getElementById('city');
        const button=document.getElementById('btn');
        const weather_icon=document.querySelector(".weather-icon");
        const status=document.querySelector('.status');
        const details=document.querySelector('.details');
        const temp=document.querySelector('.temp');
        const city=document.querySelector('.city');


        const apikey="c362c96b1ed026bf378ea41d961d84ac";
        const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
        async function checkweather(cityname){
            const response=await fetch(apiurl +cityname + `&appid=${apikey}`);
             var data=await response.json();
            console.log(data);
            if(response.status==404){
                 status.innerHTML = `<h1 style="color: red; font-size: medium; margin-top: 10px;">
        Sorry, city not found. Please enter a valid city.
        </h1>`;
                weather_icon.src="images/404-error.png";
                weather_icon.style.paddingTop="100px";
                temp.style.display="none";
                city.style.display="none";
                details.style.display="none";
                document.querySelector('.container').style.justifyContent="flex-start";
                return;
               
            }
              status.innerHTML = "";
              temp.style.display = "block";
              city.style.display = "block";
              details.style.display = "flex";
              weather_icon.style.paddingTop="0";
              weather_icon.src="images/weather (1).png";

           document.querySelector(".city").innerHTML=data.name;
            document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
            document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
           
            if(data.weather[0].main=="Clouds"){
                weather_icon.src="images/cloudy.png";
                status.innerHTML="<h4>Cloudy</h4>";
            }
            else if(data.weather[0].main=="Rain"){
                weather_icon.src="images/thunderstorm.png";
                status.innerHTML="<h4>Rainy</h4>";
            }
             else if(data.weather[0].main=="Clear"){
                weather_icon.src="images/sunny.png";
                status.innerHTML="<h4>Clear</h4>";
            }
             else if(data.weather[0].main=="Drizzle"){
                weather_icon.src="images/drizzle.png";
                status.innerHTML="<h4>Drizzle</h4>";
            }
            else if(data.weather[0].main=="Snow"){
                weather_icon.src="images/snowy.png";
                status.innerHTML="<h4>Snow</h4>";
            }
            else if(data.weather[0].main=="Haze"){
                weather_icon.src="images/haze.png";
                status.innerHTML="<h4>Haze</h4>";
            }
            else if(data.weather[0].main=="Smoke"){
                weather_icon.src="images/nature.png";
                status.innerHTML="<h4>Smoke</h4>";
            }
             else if(data.weather[0].main=="Mist"){
                weather_icon.src="images/fog.png";
                status.innerHTML="<h4>Mist</h4>";
            }

          

        }
    
        button.addEventListener("click",()=>{
            if(cityname.value==""){
                alert('Please enter the city name');
            }
            
            else{
        checkweather(cityname.value);
        if(cityname.value=="undefined"){
                alert('Please enter the city name');
            }
    }
}
)
