import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Homestay, Buffcar, Air, KH } from './../models/homestay.model';
import { Observable, from } from 'rxjs';
import { Subscription } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomestayService {
  public APIcar: string = 'http://localhost:3000/buffcar';
  public API : string ='http://localhost:3000/homestay';
  public APIair : string = 'http://localhost:3000/air';
  public APIkh : string = 'http://localhost:3000/kh';
  public homestay : Homestay[]=[];
  public buffcar: Buffcar[]=[];
  public air:Air[]=[];
  public kh:KH[]=[];
  private subscription : Subscription;
  private homestayService;
  constructor(public http: HttpClient) { }

  getAllHomestay() : Observable<Homestay[]>{
    return this.http.get<Homestay[]>(this.API);
  }
  getAllKH():Observable<KH[]>{
    return this.http.get<KH[]>(this.APIkh);
  }
  getHome(id : number):Observable<Homestay>{
    return this.http.get<Homestay>(`${this.API}/${id}`)
  }
  getKH(id:number):Observable<KH>{
    return this.http.get<KH>(`${this.APIkh}/${id}`);
  }
  getAllCar(): Observable<Buffcar[]>{
    return this.http.get<Buffcar[]>(this.APIcar);
  }
  getCar(id:number):Observable<Buffcar>{
    return this.http.get<Buffcar>(`${this.APIcar}/${id}`);
  }
  addCar(car:Buffcar):Observable<Buffcar>{
    return this.http.post<Buffcar>(this.APIcar, car);
  }
  addKH(kh:KH):Observable<KH>{
    return this.http.post<KH>(this.APIkh,kh);
  }
  deleteCar(id:number):Observable<Buffcar>{
    return this.http.delete<Buffcar>(`${this.APIcar}/${id}`);
  }
  deleteKH(id:number):Observable<KH>{
    return this.http.delete<KH>(`${this.APIkh}/${id}`);
  }
  editCar(car:Buffcar):Observable<Buffcar>{
    return this.http.put<Buffcar>(`${this.APIcar}/${car.id}`, car)
  }
  editKH(kh:KH):Observable<KH>{
    return this.http.put<KH>(`${this.APIkh}/${kh.id}`,kh);
  }
  getAllAir(): Observable<Air[]>{
    return this.http.get<Air[]>(this.APIair);
  }
  getAir(id:number):Observable<Air>{
    return this.http.get<Air>(`${this.APIair}/${id}`);
  }
  addAir(air:Air):Observable<Air>{
    return this.http.post<Air>(this.APIair, air);
  }
  deleteAir(id:number):Observable<Air>{
    return this.http.delete<Air>(`${this.APIair}/${id}`);
  }
  editAir(air:Air):Observable<Air>{
    return this.http.put<Air>(`${this.APIair}/${air.id}`,air);
  }
  addHomestay(phong:Homestay): Observable<Homestay>{
    return this.http.post<Homestay>(this.API,phong);
  }
  deleteHome(id:number):Observable<Homestay>{
    return this.http.delete<Homestay>(`${this.API}/${id}`)
  }
  editHome(phong:Homestay):Observable<Homestay>{
    return this.http.put<Homestay>(`${this.API}/${phong.id}`,phong);
  }
}
export class UserService{
  private isUserLoggedIn;
  constructor(){
    this.isUserLoggedIn=true;
  }

  setUserLoggedIn(){
    this.isUserLoggedIn=true;
  }
  getUserLoggedIn(){
    return this.isUserLoggedIn;
  }
}
