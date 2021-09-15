import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service'; 
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-colis-list',
  templateUrl: './colis-list.component.html',
  styleUrls: ['./colis-list.component.css']
})
export class ColisListComponent implements OnInit {

  colis = [];


  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 37.75;
  lng = -122.41;
 
 


  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getMyColisList();

 

  }

  getMyColisList() {
    this.api.getColisList().subscribe((res: any[]) => {
      console.log(res);

      this.colis = res;
    })
  }

  deleteColis(id) {
    if (confirm("Do you really wonna delete this item ?")) {
      this.api.deleteColis(id).subscribe((data: any) => {
        this.getMyColisList();
      }, (err) => {
        alert('Something went wrong, please try again.')
      })
    }

  }


  printInvoice(id){
    this.router.navigateByUrl('/dashboard/colis/invoice/'+id);
  }
}
