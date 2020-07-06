import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
import { Homestay, KH } from './../../models/homestay.model';
import { HomestayService } from './../../services/homestay.service';

@Component({
  selector: 'app-buffhome',
  templateUrl: './buffhome.component.html',
  styleUrls: ['./buffhome.component.css']
})
export class BuffhomeComponent implements OnInit {
  public kh:KH;
  public subscription: Subscription;
  public homestays: Homestay[] = [];
  public name: string;
  public adress: string;
  public Dientich: string;
  public Mota: string;
  public Gioithieu: string;
  public Gia: number;
  public Loaihomestay: string;
  public image: string;
  public email: string;
  public diachi:string;
  public day:number;
  public phone: string;
  public thanhtien=0;
  public mes:string;
  public ten: string;
  public thanks:string='';
  constructor(
    public activatedRoute: ActivatedRoute,
    public homestayService: HomestayService
  ) { }

  ngOnInit() {
    this.kh=new KH();
    let id = this.activatedRoute.snapshot.params['id'];
    this.subscription = this.homestayService.getAllHomestay().subscribe((data: Homestay[]) => {
      this.homestays = data;
      this.name = this.homestays[id - 1].name;
      this.adress=this.homestays[id-1].adress;
      this.Dientich=this.homestays[id-1].Dientich;
      this.Mota=this.homestays[id-1].Mota;
      this.Gioithieu=this.homestays[id-1].Gioithieu;
      this.Gia=this.homestays[id-1].Gia;
      this.Loaihomestay=this.homestays[id-1].Loaihomestay;
      this.image=this.homestays[id-1].image;
      
    });
  }
  getInfor(){
    
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
      this.subscription=this.homestayService.addKH(this.kh).subscribe((data)=>{

      });
      this.thanks=`Cảm ơn ${this.ten} đã sử dụng dịch vụ của chúng tôi. Chúc bạn và người thân có những phút giây thoải mái nhất cùng Homestay`
    }
  }

}
