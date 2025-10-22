import weatherIcons from "../assets/images/icons";

const WEATHER_CODES = {
  0: { description: 'Clear sky', icon: weatherIcons.sunny },
  1: { description: 'Mainly clear', icon: weatherIcons.sunny },
  2: { description: 'Partly cloudy', icon: weatherIcons.partlyCloudy },
  3: { description: 'Overcast', icon: weatherIcons.overcast },
  45: { description: 'Fog', icon: weatherIcons.fog },
  48: { description: 'Fog', icon: weatherIcons.fog },
  51: { description: 'Light drizzle', icon: weatherIcons.drizzle },
  53: { description: 'Moderate drizzle', icon: weatherIcons.drizzle },
  55: { description: 'Dense drizzle', icon: weatherIcons.drizzle },
  56: { description: 'Light drizzle', icon: weatherIcons.drizzle },
  57: { description: 'Dense drizzle', icon: weatherIcons.drizzle },
  61: { description: 'Slight rain', icon: weatherIcons.rain },
  63: { description: 'Moderate rain', icon: weatherIcons.rain },
  65: { description: 'Heavy rain', icon: weatherIcons.rain },
  66: { description: 'Light rain', icon: weatherIcons.rain },
  67: { description: 'Heavy rain', icon: weatherIcons.rain },
  71: { description: 'Slight snow fall', icon: weatherIcons.snow },
  73: { description: 'Moderate snow fall', icon: weatherIcons.snow },
  75: { description: 'Heavy snow fall', icon: weatherIcons.snow },
  77: { description: 'Snow grains', icon: weatherIcons.snow },
  80: { description: 'Slight rain', icon: weatherIcons.rain },
  81: { description: 'Moderate rain', icon: weatherIcons.rain },
  82: { description: 'Violent rain', icon: weatherIcons.rain },
  85: { description: 'Slight snow', icon: weatherIcons.snow },
  86: { description: 'Heavy snow', icon: weatherIcons.snow },
  95: { description: 'Thunderstorm', icon: weatherIcons.storm },
  96: { description: 'Thunderstorm', icon: weatherIcons.storm },
  99: { description: 'Thunderstorm', icon: weatherIcons.storm }
};

export default WEATHER_CODES