import { Component, OnInit, OnDestroy } from '@angular/core';
import { Air } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editdichvu',
  templateUrl: './editdichvu.component.html',
  styleUrls: ['./editdichvu.component.css']
})
export class EditdichvuComponent implements OnInit ,OnDestroy{
  public air:Air;
  public subscriptionParam:Subscription;
  public subscription:Subscription;
  constructor(
    public homestayService:HomestayService,
    public routerService:Router,
    public activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.air=new Air();
    this.loadData();
  }
  loadData(){
    this.subscriptionParam=this.activatedRoute.params.subscribe((data:Params)=>{
      let id=data['id'];
      this.subscription=this.homestayService.getAir(id).subscribe((data:Air)=>{
        this.air=data;
      });
    });
  }
  onEditAir(){
    this.subscription=this.homestayService.editAir(this.air).subscribe((data:Air)=>{
      this.routerService.navigateByUrl('admin/dichvu');
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
    if(this.subscriptionParam){
      this.subscriptionParam.unsubscribe();
    }
  }

}
