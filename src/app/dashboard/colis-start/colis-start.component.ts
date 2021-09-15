import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-colis-start',
  templateUrl: './colis-start.component.html',
  styleUrls: ['./colis-start.component.css']
})
export class ColisStartComponent implements OnInit {

  livreurs = [];
  vehicules = [];
  
  id;

  successMessage="";

  add = new FormGroup({
    id_livreur: new FormControl('',Validators.required),
    id_vehicule: new FormControl('',Validators.required), 
    description: new FormControl('',Validators.required)
  })
  constructor(private api:ApiService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;


    this.getEmployees();
    this.getVehicules();
  }

  getEmployees(){
    this.api.getEmployeesList().subscribe((res:any[])=>{
      console.log(res);

      let livreurs = res.filter((e)=> e.roles[0].name === "ROLE_PM" )

      this.livreurs = livreurs;
      
    })
  }


  getVehicules(){
    this.api.getVehiculesList().subscribe((res:any[])=>{
      console.log(res);

       this.vehicules = res;
    })
  }
  

  addNow(){
    let course = this.add.value;

    course.id_colis= this.id;

    this.api.addNewCourse(course).toPromise().then((res:any)=>{
      console.log(res);

      if (res.id) {
        this.successMessage="Course ajouté avec success, votre livreur sera notifié."
        this.add.reset();
      }
      
    }).catch((err)=>{
      alert("Somethin went wrong please try again.")
    })
    
  }

}
