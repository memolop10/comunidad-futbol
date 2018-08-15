import {
  Component,
  OnInit
} from '@angular/core';
import * as L from 'leaflet'

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.component.html',
  styleUrls: ['./jugar.component.css']
})
export class JugarComponent implements OnInit {
  mymap: any;

  constructor() {}

  ngOnInit() {

    this.mymap = L.map('mapa',{zoomControl:false}).setView([19.414462, -99.050053], 12);

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      maxZoom: 18,
      id: 'mapbox.dark',
      accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'
    }).addTo(this.mymap);

  
      L.control.zoom({
        position:'topright'
      }).addTo(this.mymap);


    var fieldg = L.icon({
      iconUrl: 'assets/soccerfield.png',
      // shadowUrl: 'leaf-shadow.png',

      iconSize: [30, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [15, 70], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    L.marker([19.415205, -99.058325], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.417242, -99.048802], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.422069, -99.047826], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.416159, -99.064123], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.407602, -99.091479], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.423870, -99.139981], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.427305, -99.139112], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.428416, -99.144430], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.405384, -99.103212], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.446984, -99.084207], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.445476, -99.127233], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.392296, -99.012435], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.406854, -99.081816], {
      icon: fieldg
    }).addTo(this.mymap);

    L.marker([19.409283, -99.069715], {
      icon: fieldg
    }).addTo(this.mymap);
    L.marker([19.430288, -99.058565], {
      icon: fieldg
    }).addTo(this.mymap);

    L.marker([19.421593, -99.018795], {
      icon: fieldg
    }).addTo(this.mymap);

    L.marker([19.419604, -99.010956], {
      icon: fieldg
    }).addTo(this.mymap);

  }
    


    showLocation() {
      if (navigator.geolocation) {
        let map = this.mymap
        navigator.geolocation.getCurrentPosition(function (position){
          var soccericon = L.icon({

            iconUrl: 'assets/soccer.png',
      
            iconSize: [30, 45], // size of the icon
            shadowSize: [50, 64], // size of the shadow
            iconAnchor: [15, 70], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62], // the same for the shadow
            popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
          });
          L.marker([position.coords.latitude, position.coords.longitude], {
            icon: soccericon
          }).addTo(map);
          map.flyTo([position.coords.latitude, position.coords.longitude], 16)
        })
      } else {
        console.log("No tienes acceso a GPS")
      }
    }

}