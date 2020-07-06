import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomestayService } from './../../services/homestay.service'
import { from, Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Air, KH } from 'src/app/models/homestay.model';
@Component({
  selector: 'app-airdetail',
  templateUrl: './airdetail.component.html',
  styleUrls: ['./airdetail.component.css']
})
export class AirdetailComponent implements OnInit, OnDestroy {
  public air:Air[]=[];
  public kh:KH;
  public subscription:Subscription;
  public name: string;
  public Mota:string;
  public Gia:number;
  public image: string;
  public thanks:string;
  public email: string;
  public diachi:string;
  public day:number;
  public phone: string;
  public thanhtien=0;
  public mes:string;
  public ten: string;
  constructor(public homestayService : HomestayService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.kh=new KH();
    let id = this.activatedRoute.snapshot.params['id'];
    this.subscription=this.homestayService.getAllAir().subscribe((data:Air[])=>{
      this.air=data;
      this.name=this.air[id-1].name;
      this.Mota=this.air[id-1].Mota;
      this.Gia=this.air[id-1].Gia;
      this.image=this.air[id-1].image;   
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
      this.kh.day=this.day;
      this.kh.email=this.email;
      this.kh.phone=this.phone;
      this.kh.monney=this.thanhtien;
      this.subscription=this.homestayService.addKH(this.kh).subscribe((data:KH)=>{

      });
      this.thanks=`Cảm ơn ${this.ten} đã sử dụng dịch vụ của chúng tôi. Chúc bạn và người thân có những phút giây thoải mái nhất cùng Homestay`
    }
  }
}
