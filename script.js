window.addEventListener('load', () => {
    let long;
    let lat;
    let key = "2cb3a37c52c2bf24bec3da22be7375ae"
    let temperatureDegree = document.querySelector(".temperature-degree")
    let temperatureDescription = document.querySelector(".description")
    let locationTimezone = document.querySelector(".location-timezone")
    let weatherIcon = document.querySelector(".icon")
    

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
                temperatureDegree.textContent = temp
                temperatureDescription.textContent = description
                locationTimezone.textContent = data.name
                document.querySelector(".icon").src =
                "https://openweathermap.org/img/wn/" + icon + ".png";

            })
        })
    }           
})