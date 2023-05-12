import { Component } from '@angular/core';
import { WeatherService } from './weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../styles.css']
})
export class AppComponent {

  constructor(private weatherService: WeatherService) { }

  title = 'weather-app';
  lat = 10.7867;
  long = 76.65;
  selectedDistrict: any;

  keralaDistricts = [
    {
      name: 'Kasaragod',
      lat: '12.49',
      lng: '74.98'
    },
    {
      name: 'Wayanadu',
      lat: '11.6854',
      lng: '76.1320'
    },
    {
      name: 'Kannur',
      lat: '11.8745',
      lng: '75.3704'
    },
    {
      name: 'Malappuram',
      lat: '11.0510',
      lng: '76.0711'
    },
    {
      name: 'Kozhikode',
      lat: '11.25',
      lng: '75.78'
    },
    {
      name: 'Palakkad',
      lat: '10.7867',
      lng: '76.65'
    },
    {
      name: 'Ernakulam',
      lat: '9.98',
      lng: '76.29'
    },
    {
      name: 'Idukki',
      lat: '9.91',
      lng: '77.10'
    },
    {
      name: 'Kottayam',
      lat: '10.7867',
      lng: '76.65'
    },
    {
      name: 'Alappuzha',
      lat: '9.49',
      lng: '76.38'
    },
    {
      name: 'Pathanamthitta',
      lat: '9.26',
      lng: '76.78'
    },

    {
      name: 'Kollam',
      lat: '8.89',
      lng: '76.61'
    },
    {
      name: 'Thiruvananthapuram',
      lat: '8.52',
      lng: '76.93'
    },
    {
      name: 'Thrissur',
      lat: '10.52',
      lng: '76.21'
    }
  ]

  ngOnInit() {
    console.log("******");
    this.weatherService.getWeather(this.lat, this.long).subscribe((res) => {
      console.log("response", res);
      this.weatherDetail = res
    })

  }

  weatherDetail: any
  selectADistrict() {
    console.log("clicked selectADistrict()", this.selectedDistrict);
    this.lat = this.selectedDistrict.lat;
    this.long = this.selectedDistrict.lng;
    this.weatherService.getWeather(this.lat, this.long).subscribe((res: any) => {
      console.log("response", res);

      this.weatherDetail = res
    }
    )
  }

}
