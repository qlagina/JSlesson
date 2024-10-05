let log = console.log;

let weather = prompt("weather");
switch(weather) {
    case "sunny":
        log("Go visit Piglet")
        break;

    case "cloudy":
        log("Better stay home")
        break;

    case "rainy":
        log("Don't forget about the umbrella")
        break;

    case "cold":
        log("When leaving home, don't forget your scarf")
        break;

     case "windy":
        log("Don't try to fly in a balloon")
        break;

        default:
            log(`I am not sure about ${subject}.`);
}

