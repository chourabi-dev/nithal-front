import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-vehicules-edit',
  templateUrl: './vehicules-edit.component.html',
  styleUrls: ['./vehicules-edit.component.css']
})
export class VehiculesEditComponent implements OnInit {


  vehiculeForm = new FormGroup({
    mark: new FormControl('',Validators.required),
    model: new FormControl('',Validators.required),
    registrationPlate: new FormControl('',Validators.required),
    note: new FormControl('',Validators.required),
    date: new FormControl(''),
    isOut: new FormControl(false),
    largeurV: new FormControl(''),
    gamme: new FormControl(''),
    poidsMax: new FormControl(''),
    hauteurV: new FormControl(''),
    
  })
  id;

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getDetails();
  }


  getDetails(){
    this.api.detailsVehicule(this.id).subscribe((data:any)=>{
      

      this.vehiculeForm.setValue({
        mark: data.mark,
        model: data.model,
        registrationPlate: data.registrationPlate,
        note: data.note,
        date: data.date,
        isOut:data.isOut,
        largeurV:data.largeurV,
        gamme:data.gamme,
        poidsMax:data.poidsMax,
        hauteurV:data.hauteurV,
        
 


      });
    });
  }

  addNow(){
    this.api.updateVehicule(this.id,this.vehiculeForm.value).subscribe((data)=>{
      console.log(data);
      this.vehiculeForm.reset();
      this.router.navigate(['/dashboard/home/vehicules'])
      
    },(err)=>{
      alert("Something went wrong, please try again.")
    })
  }
}
