import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicules-add',
  templateUrl: './vehicules-add.component.html',
  styleUrls: ['./vehicules-add.component.css']
})
export class VehiculesAddComponent implements OnInit {

  vehiculeForm = new FormGroup({
    mark: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    registrationPlate: new FormControl('',Validators.required),
    note: new FormControl('',Validators.required),
    date: new FormControl(''),
    largeurV: new FormControl(''),
    gamme: new FormControl(''),
    poidsMax: new FormControl(''),
    hauteurV: new FormControl(''),
    
 

 
    
  })
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
  }

  addNow(){
    this.api.addNewVehicule(this.vehiculeForm.value).subscribe((data)=>{
      console.log(data);
      this.vehiculeForm.reset();
      this.router.navigate(['/dashboard/home/vehicules'])
      
    },(err)=>{
      alert("Something went wrong, please try again.")
    })
  }

}
