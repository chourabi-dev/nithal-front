import { HttpClient, HttpEvent, HttpEventType, HttpRequest, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {


  errMsg='';
  successMsg='';
  signinForm = new FormGroup({
    username : new FormControl('',Validators.required),
    name : new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required),
    cinId : new FormControl('',Validators.required), 
    role: new FormControl('user',Validators.required),
    
    
  })



  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;


  constructor(private auth:AuthService,private router:Router, private api:ApiService,private route:ActivatedRoute,private http:HttpClient ) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') != "ROLE_ADMIN") {
      this.router.navigate(['/error-page'])
    }

    this.getEmployeeDetails();
  }


 

 

  getEmployeeDetails(){
    const idEmp = this.route.snapshot.params.id;

    this.api.getEmployeesList().subscribe((data:any)=>{
      var employees = data;

      for (let i = 0; i < employees.length; i++) {
        const e = employees[i];

        if (e.id == idEmp) {
          console.log(e);
          
          let employee = {
            username : e.username, 
            name :  e.name, 
            phone:  e.phone, 
            cinId :   e.cinId, 
            role: e.roles[0].name, 
          };
           
           

          this.signinForm.setValue(employee);
        }
        
      }


    })
  }




  signinNow(){
    const idEmp = this.route.snapshot.params.id;
    this.errMsg="";
    const username = this.signinForm.value.username;
    const name = this.signinForm.value.name;
    const email = this.signinForm.value.email;
    const category = this.signinForm.value.category;
    const cinId = this.signinForm.value.cinId;
    const role = this.signinForm.value.role;
    
    
    

    this.auth.updateAccount(username,email,name,category,cinId,role,idEmp).subscribe((data:any)=>{
      console.log(data);
      if (data.success == true) {
        this.successMsg="Account updated successfully.";
        this.signinForm.reset();
      } else {
        this.errMsg="Something went wrong, please try again.";
      }

      
    },(err)=>{
      console.log(err);
      
      
      
    })

    
  }

}
