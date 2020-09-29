import React from 'react'

const Weather = ({main, description, city, country, error, temperature }) => {
    
    //function that matches weather keywords with weather
    //uses switch to match location's main weather identifier to case
    //image is returned if case matches

    function matchValues () {
        
        switch(main) {
            case "Thunderstorm":
                return <img src='https://media.giphy.com/media/3oEjHB1EKuujDjYFWw/giphy.gif' alt=""/>

            case "Clouds":    
                return <img src='https://media.giphy.com/media/GFXNdR1tuMopi/giphy.gif' alt=""/>

            case "Drizzle":
                return <img src='https://media.giphy.com/media/n0Zt16UrMKNFu/giphy.gif' alt=""/>
            
            case "Rain":
                return <img src='https://media.giphy.com/media/dI3D3BWfDub0Q/giphy.gif' alt=""/>

            case "Snow":
                return <img src='https://media.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif' alt=""/>

            case "Clear":
                return <img src='https://media.giphy.com/media/u01ioCe6G8URG/giphy.gif' alt=""/>

            case "Atmosphere":
                return <img src='https://media.giphy.com/media/ZWRCWdUymIGNW/giphy.gif' alt=""/>

            case "Mist":
            case "Haze":
            case "Fog":
            case "Smoke":
                return <img src='https://media.giphy.com/media/d6JfdOpurCisGQdzdA/giphy.gif' alt=""/>
            
            case "Dust":
            case "Sand":
            case "Ash":
                return <img src='https://media.giphy.com/media/rJa1pXoPhYjGU/giphy.gif' alt=""/>

            case "Squall":
            case "Tornado":
                return <img src='https://media.giphy.com/media/KlMUO1YqJTA0o/giphy.gif' alt=""/>
           
            default:
                return <img src='https://media.giphy.com/media/xUOxfjsW9fWPqEWouI/giphy.gif' alt=""/>
            }
        }

    return  (
        <div>
            {city && country && <p>{city}, {country}</p>}
            {temperature && <p>{temperature} °F</p>}
            {description && <p> Conditions: {description}</p>}
            {error && <p>{error}</p>}
            {description && matchValues()}
        </div>
    )
}

export default Weather;
// Uses && to ensure API has been passed through before returning data
