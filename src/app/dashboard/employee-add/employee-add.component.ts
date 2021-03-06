import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {

  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    cinId : new FormControl('',Validators.required), 
    phone : new FormControl('',Validators.required),
    role: new FormControl('user',Validators.required),
    
    
  })
  clients:any = [];


  constructor(private auth:AuthService,private router:Router,private http:HttpClient) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }
  }





  add(){
    this.errMsg="";
    const username = this.signinForm.value.username; 
    const name = this.signinForm.value.name; 
    const phone = this.signinForm.value.phone;
    const cinId = this.signinForm.value.cinId;
    const role = this.signinForm.value.role;
    
    
    

    this.auth.signUp(username,name,phone,cinId,role).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Account created successfully.";
        this.signinForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      err.error.errors.forEach(e => {

        this.errMsg+=e.field+', '+e.defaultMessage+'\n';
      });
      
    })

    
  }

}
