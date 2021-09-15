import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-track-colis',
  templateUrl: './track-colis.component.html',
  styleUrls: ['./track-colis.component.css']
})
export class TrackColisComponent implements OnInit, OnDestroy {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 30;
  lng = 10;

  idColis;


  idTrack = null;

  constructor(private api: ApiService, private route: ActivatedRoute) { }


  ngOnDestroy(): void {
    clearInterval(this.idTrack);
  }

  ngOnInit(): void {
    Object .getOwnPropertyDescriptor(mapboxgl, "accessToken").set(environment.accessToken);
    
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());

    this.idColis = this.route.snapshot.params.id;
    this.idTrack =  setInterval(()=>{
      this.getLivreurPosition();
    },1000)

  }


 

  getLivreurPosition() {
    this.api.getColisCordsById(this.idColis).toPromise().then((res:any)=>{
      console.log(res);


      const latitude = res.latitude;
      const longitude = res.longitude;
       

      this.map.setCenter([longitude, latitude])

      

      const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])

      .addTo(this.map);

      setTimeout(() => {
        marker.remove();
      }, 1000);
      
    }).catch((err)=>{

    });
  }


}
