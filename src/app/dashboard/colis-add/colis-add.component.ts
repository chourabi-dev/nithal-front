import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-colis-add',
  templateUrl: './colis-add.component.html',
  styleUrls: ['./colis-add.component.css']
})
export class ColisAddComponent implements OnInit {
 
  add = new FormGroup({
    poids: new FormControl('',Validators.required),
    hauteur: new FormControl('',Validators.required),
    largeur: new FormControl('',Validators.required),
    collect: new FormControl(false),
    type: new FormControl('',Validators.required),
    urgence: new FormControl('',Validators.required),
    
    adrDistinataire: new FormControl('',Validators.required),
    adrExpediteur: new FormControl('',Validators.required),
    
    villeDistinataire: new FormControl('',Validators.required),
    codePostalDistinataire: new FormControl('',Validators.required),
    govDistinataire: new FormControl('',Validators.required),
    description: new FormControl(''),
    
    
  })
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    
  }


  addNow(){
    const colis = this.add.value;

    this.api.addNewColis(colis).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/dashboard/home/colis')
      
    })


    
    
  }

}
