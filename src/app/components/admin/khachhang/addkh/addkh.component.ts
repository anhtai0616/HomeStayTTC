import { Component, OnInit, OnDestroy } from '@angular/core';
import { KH } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addkh',
  templateUrl: './addkh.component.html',
  styleUrls: ['./addkh.component.css']
})
export class AddkhComponent implements OnInit, OnDestroy {
  public kh:KH;
  public subscription:Subscription;
  constructor(
    public homestayService: HomestayService,
    public routerService:Router
  ) { }

  ngOnInit() {
    this.kh=new KH();
    
  }
  onAddKH(){
    this.subscription=this.homestayService.addKH(this.kh).subscribe((data:KH)=>{
      this.routerService.navigateByUrl('admin/kh');
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
