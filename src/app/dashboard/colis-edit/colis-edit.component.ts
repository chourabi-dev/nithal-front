import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-colis-edit',
  templateUrl: './colis-edit.component.html',
  styleUrls: ['./colis-edit.component.css']
})
export class ColisEditComponent implements OnInit {

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
  id;

  constructor(private api:ApiService, private router:Router,private route:ActivatedRoute) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getColis();


  }


  getColis(){
    this.api.getColisById(this.id).subscribe((res:any)=>{
      console.log("hi",res);
      let col = res;
      delete col.etat;
      delete col.dateCreation;
      delete col.id;
      

      this.add.setValue(col);
    })
  }

  update(){
    let colis = this.add.value;

    colis.id = this.id;
    this.api.updateColisData(colis).subscribe((res)=>{
      console.log(res);
      this.router.navigateByUrl('/dashboard/home/colis')
      
    }) 
  }


  


}
