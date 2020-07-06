import { Component, OnInit, OnDestroy } from '@angular/core';
import { KH } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent implements OnInit,OnDestroy {
  public kh:KH[]=[];
  public subscription: Subscription;
  constructor(
    public homestayService: HomestayService
  ) { }

  ngOnInit() {
    this.subscription=this.homestayService.getAllKH().subscribe((data:KH[])=>{
      this.kh=data;
    });
  }
  onDeleteKH(id:number){
    this.subscription=this.homestayService.deleteKH(id).subscribe((data:KH)=>{
      this.updateKHAfterDel(id);
    });
  }
  updateKHAfterDel(id:number){
    for(var i=0;i<this.kh.length;i++){
      if(this.kh[i].id==id){
        this.kh.splice(i,1);
        break;
      }
    }
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
