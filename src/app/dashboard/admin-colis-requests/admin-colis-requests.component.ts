import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-admin-colis-requests',
  templateUrl: './admin-colis-requests.component.html',
  styleUrls: ['./admin-colis-requests.component.css']
})
export class AdminColisRequestsComponent implements OnInit {

  colis = [];


  constructor(private api: ApiService, private router:Router) { }

  ngOnInit(): void {
    this.getAllColisRequest();
  }

  getAllColisRequest() {
    this.api.getAllColisRequest().subscribe((res: any[]) => {
      console.log(res);

      this.colis = res;
    })
  }

  deleteColis(id) {
    if (confirm("Do you really wonna delete this item ?")) {
      this.api.deleteColis(id).subscribe((data: any) => {
        this.getAllColisRequest();
      }, (err) => {
        alert('Something went wrong, please try again.')
      })
    }

  }


  startTrack(id){
    this.router.navigateByUrl('/dashboard/home/colis/start/'+id);
  }

  printInvoice(id){
    this.router.navigateByUrl('/dashboard/colis/invoice/'+id);
  }
}
