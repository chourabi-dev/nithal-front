import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicules-list',
  templateUrl: './vehicules-list.component.html',
  styleUrls: ['./vehicules-list.component.css']
})
export class VehiculesListComponent implements OnInit {
  vehicules:any;
  constructor(private api:ApiService, private router:Router) { }


  getVehiculesList(){
    this.api.getVehiculesList().subscribe((data:any)=>{
      this.vehicules = data.sort((a,b)=> a.id - b.id)
    })
  }
  ngOnInit(): void {
    if (localStorage.getItem('role') == "ROLE_USER") {
      this.router.navigate(['/error-page'])
    }


    this.getVehiculesList();
  }

  deleteVehicule(id){
    if (confirm("Do you really wonna delete this item ?")) {
      this.api.deleteVehicule(id).subscribe((data)=>{
        this.getVehiculesList();
      },(err)=>{
        alert('Something went wrong, please try again.')
      })
    }
  }

}
