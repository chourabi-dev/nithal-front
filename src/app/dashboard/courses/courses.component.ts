import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses= [];

  /**
   * 
   * colis: {id: 5, adrExpediteur: 'exmpl rue 88', poids: 131, hauteur: 100, largeur: 120, …}
date: "2021-09-12T23:59:06.000+0000"
description: "this is a urgent dilever"
id: 3
livreur: {id: 5, name: 'Ninja livreur', username: 'ninja@gmail.com', cinId: '11225588', phone: '77889966', …}
vehicule: {id: 1, note: 'New', registrationPlate: '200TN2000', mark
   */

  constructor(private api:ApiService,) { }

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses(){
    this.api.getListOfCourses().subscribe((res:any[])=>{
      console.log(res);
      this.courses = res;
    })
  }


  cloture(id){
    // update colis state from 1 to 2
    if (confirm('Voulez-vous vraiment fermer ce course ?')) {
      this.api.deliverColis(id).subscribe((res)=>{
        console.log(res);
        
      })
    }
  }

}
