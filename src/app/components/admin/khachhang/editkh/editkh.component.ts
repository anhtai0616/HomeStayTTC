import { Component, OnInit, OnDestroy } from '@angular/core';
import { KH } from 'src/app/models/homestay.model';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-editkh',
  templateUrl: './editkh.component.html',
  styleUrls: ['./editkh.component.css']
})
export class EditkhComponent implements OnInit,OnDestroy {
  public kh:KH;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public homestayService:HomestayService,
    public routerService: Router,
    public activatedRouterService:ActivatedRoute
  ) { }

  ngOnInit() {
    this.kh=new KH();
    this.loadData();
  }
  loadData(){
    this.subscriptionParams=this.activatedRouterService.params.subscribe((data:Params)=>{
      let id=data['id'];
      this.subscription=this.homestayService.getKH(id).subscribe((kh:KH)=>{
        this.kh=kh;
      });
    });
  }
  onEditKH(){
    this.subscription=this.homestayService.editKH(this.kh).subscribe((data:KH)=>{
      this.routerService.navigateByUrl('admin/kh');
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.subscriptionParams){
      this.subscriptionParams.unsubscribe();
    }
  }

}
