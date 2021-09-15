import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  menu = []

  user: any;

  notifications: any = [];

  constructor(private api: ApiService, private auth: AuthService, private router: Router) { }

  ngOnInit(): void {


    this.auth.info().subscribe((data: any) => {
      console.log(data);
      localStorage.setItem('role', data.roles[0].name);

      this.user = data;

      const role = (data.roles[0].name);

      console.log("user role", role);

      switch (role) {
        case "ROLE_ADMIN":
          this.menu = [

            {
              title: "Acceuil",
              counter: 0,
              link: '/dashboard/home/dash',
              subMenus: []
            },
            {
              title: "Utilisateurs",
              counter: 0,
              link: '/dashboard/home/admin-employees',
              subMenus: []
            },

            {
              title: "Vehicules",
              counter: 0,
              link: '/dashboard/home/vehicules',
              subMenus: []
            },

            {
              title: "Commandes",
              counter: 0,
              link: '/dashboard/home/admin-colis-request',
              subMenus: []
            },






          ]
          break;

        case "ROLE_PM":
          this.trackMyPosition();
          this.menu = [

            {
              title: "Acceuil",
              counter: 0,
              link: '/dashboard/home/dash',
              subMenus: []
            },
            {
              title: "Mes courses",
              counter: 0,
              link: '/dashboard/home/courses',
              subMenus: []
            }



          ]

          break;
        case "ROLE_USER":
          this.menu = [
            {
              title: "Acceuil",
              counter: 0,
              link: '/dashboard/home/dash',
              subMenus: []
            },
            {
              title: "Mes Colis",
              counter: 0,
              link: '/dashboard/home/colis',
              subMenus: []
            }

          ]

          break;





        default:
          break;
      }

    }, () => {
      localStorage.clear();

      this.router.navigate(['/signin'])
    })


    this.getNotification();



  }

  newNotifcationsCount = [];


  getNotification() {
    this.api.notificationsList().subscribe((data: any) => {
      console.log(data);

      data.forEach(n => {
        if (n.seen == false) {
          this.newNotifcationsCount.push(n);
        }
      });

      this.notifications = data.reverse();
    })
  }

  updateNotifications() {
    this.api.updateNotifications().subscribe((data) => {
      this.getNotification();
    });
  }




  logout() {
    localStorage.clear();
    // router => signin 
    this.router.navigate(['/signin'])
  }


  trackMyPosition(){
    setInterval(()=>{
      navigator.geolocation.watchPosition((success)=>{
        console.log(success.coords);
        const long = success.coords.longitude;
        const lat = success.coords.latitude;
        
        this.api.updateMyPosition(long,lat).subscribe((res)=>null)
        
      },(err)=>{

      })

    },1000);
  }



}
