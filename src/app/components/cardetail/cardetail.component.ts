import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomestayService } from './../../services/homestay.service';
import { from, Subscription } from 'rxjs';
import { Buffcar, KH } from 'src/app/models/homestay.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cardetail',
  templateUrl: './cardetail.component.html',
  styleUrls: ['./cardetail.component.css']
})
export class CardetailComponent implements OnInit, OnDestroy {
  public car:Buffcar[]=[];
  public subscription:Subscription;
  public name:string;
  public Mota:string;
  public Maxspeed: string;
  public Gia:number;
  public image:string;
  public thanks:string;
  public email: string;
  public diachi:string;
  public day:number;
  public phone: string;
  public thanhtien=0;
  public mes:string;
  public ten: string;
  public kh:KH;
  constructor(public homestayService:HomestayService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.kh=new KH();
    let id = this.activatedRoute.snapshot.params['id'];
    this.subscription=this.homestayService.getAllCar().subscribe((data:Buffcar[])=>{
      this.car=data;
      this.name=this.car[id-1].name;
      this.Mota=this.car[id-1].Mota;
      this.Maxspeed=this.car[id-1].Maxspeed;
      this.Gia=this.car[id-1].Gia;
      this.image=this.car[id-1].image;
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  onKeyUp(event){
    this.thanhtien=this.day*this.Gia;
  }
  onClick(even){
    if(this.email==null || this.diachi==null || this.phone==null || this.day==null){
      this.mes="Vui lòng nhập vào thông tin";
    }
    if(this.email!=null && this.diachi!=null && this.phone!=null && this.day!=null){
      this.mes="";
      this.kh.name=this.ten;
      this.kh.adress=this.diachi;
      this.kh.email=this.email;
      this.kh.phone=this.phone;
      this.kh.day=this.day;
      this.kh.monney=this.thanhtien;
      this.subscription=this.homestayService.addKH(this.kh).subscribe((data:KH)=>{

      });
      this.thanks=`Cảm ơn ${this.ten} đã sử dụng dịch vụ của chúng tôi. Chúc bạn và người thân có những phút giây thoải mái nhất cùng Homestay`
    }
  }

}
