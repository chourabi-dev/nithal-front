import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  notificationsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/list',

      httpOptions

    )
  }

  updateNotifications() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/notifications/update',

      httpOptions

    )
  }







  getEmployeesList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/list',

      httpOptions

    )
  }

  getClientsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/clients/list',

      httpOptions

    )
  }




  getTeamsList() {

    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/teams/list',

      httpOptions

    )
  }



  deleteEmployee(id) {
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization': tokenType + ' ' + token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/employees/delete/' + id,

      httpOptions

    )
  }


  addNewVehicule(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/vehicules/add',data,
      
      httpOptions

    )
  }


  getVehiculesList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/vehicules/list',
      
      httpOptions

    )
  }

  deleteVehicule(id){
    
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/vehicules/delete/'+id,
      
      httpOptions

    )
  }

  
  updateVehicule(id,data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/vehicules/update/'+id,data,
      
      httpOptions

    )
  }


  detailsVehicule(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/vehicules/details/'+id,
      
      httpOptions

    )
  }


  addNewColis(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/colis/add',data,
      
      httpOptions

    )
  }

  addNewCourse(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/courses/add',data,
      
      httpOptions

    )
  }


  

  updateColisData(data){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.post(environment.apiEndPoint + '/api/colis/update',data,
      
      httpOptions

    )
  }


  

  getColisList(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/list',
      
      httpOptions

    )
  }

  getAllColisRequest(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/tous/list',
      
      httpOptions

    )
  }


  getColisById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/find/'+id,
      
      httpOptions

    )
  }


  getColisCordsById(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/cords/'+id,
      
      httpOptions

    )
  }


  deleteColis(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/delete/'+id,
      
      httpOptions

    )
  }


  
  getListOfCourses(){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/courses/livreur/list',
      
      httpOptions

    )
  }


  

  

  deliverColis(id){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
    return this.http.get(environment.apiEndPoint + '/api/colis/delivered/'+id,
      
      httpOptions

    )
  }


  

  updateMyPosition(long,lat){
    const token = localStorage.getItem("token");
    const tokenType = localStorage.getItem("tokenType");
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'authorization':tokenType+' '+token
      })
    };
 
    return this.http.post(environment.apiEndPoint + '/api/auth/cords/update',{longitde:long,altitude:lat},
      
      httpOptions

    )
  }

}
