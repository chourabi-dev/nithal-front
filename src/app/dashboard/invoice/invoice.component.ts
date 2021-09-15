import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  id;
  invoice = null;
  descriptions = [];
  total = 0;

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.getData();
  }


  getData(){
    this.api.getColisById(this.id).subscribe((res:any)=>{
      console.log(res);
      this.invoice = res;

 

      let descriptions = [];

      descriptions.push({message:"Dimension : "+res.hauteur+" cm / "+res.largeur+" cm", price:0})
      descriptions.push({message:"Poid initial", price:6})
      this.total+= 6;

      if (res.poids > 3) {
        descriptions.push({message:"Poid supplimentaire", price: (res.poids - 3) })
        this.total+=(res.poids - 3);
      }


      if(res.collect == true ){
        descriptions.push({message:"Collect colis", price: 4 })
        this.total+=4;
      }

      this.descriptions = descriptions;
 
      if (res.urgence=='urgent') {
        descriptions.push({message:"Urgence : urgent x 2", price: (this.total*=2)  })
        this.total*=2;
      }

      if (res.urgence=='tres urgent') {
        descriptions.push({message:"Urgence : tres urgent x 3", price: (this.total*=3) })
        
      }
      
     setTimeout(()=>{
      print();
     },2000)
      
      

    })
  } 

}
