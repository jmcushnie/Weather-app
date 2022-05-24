window.addEventListener('load', () => {
    let long;
    let lat;
    let key = "2cb3a37c52c2bf24bec3da22be7375ae"
    let temperatureDegree = document.querySelector(".temperature-degree")
    let temperatureDescription = document.querySelector(".description")
    let locationTimezone = document.querySelector(".location-timezone")
    let cardContainer = document.querySelector(".card-container")
    let time = document.querySelector(".time")

    // Get Date
    const getCurrentTime = () => {
        time.innerHTML = new Date().toLocaleTimeString("en-us", {timeStyle: "short"})
        setInterval(getCurrentTime, 1000)
    }
     console.log(getCurrentTime())

    // Weather API
    if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition
            (position => {
                long = position.coords.longitude
                lat = position.coords.latitude
            
               
            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${key}&units=metric`
           
            fetch(api)
            .then(response => {
                return response.json()
            })
            .then (data => {
                console.log(data)
                const {temp} = data.main
                const {description, icon} = data.weather[0]

                
                //Set DOM Elements from the API
                temperatureDegree.textContent = (Math.round(temp))
                temperatureDescription.textContent = description
                locationTimezone.textContent = data.name
                document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";

            })
        })
    }   
            
})

