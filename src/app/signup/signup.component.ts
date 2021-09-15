import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    cinId : new FormControl('',Validators.required),
    email : new FormControl('',Validators.email), 
    
    
  })


  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
  }




  signinNow(){
    this.errMsg="";
    const username = this.signinForm.value.username; 
    const name = this.signinForm.value.name; 
    const phone = this.signinForm.value.phone;
    const cinId = this.signinForm.value.cinId;
    
    this.auth.signUp(username,name,phone,cinId,'ROLE_USER').subscribe((data:any)=>{
      console.log(data);

      if (data) {
         
        
        
         // redirect to main dashboard

         this.router.navigate(['/signin']);
      }
      
    },(err)=>{
      if (err.status==401 || err.status==400) {
        this.errMsg="Une erreur s'est produite. Veuillez réessayer"
      }
    })

    

    
  }

}
