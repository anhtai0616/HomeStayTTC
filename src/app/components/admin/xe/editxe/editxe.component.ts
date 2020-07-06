import { Component, OnInit, OnDestroy } from '@angular/core';
import { Buffcar } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editxe',
  templateUrl: './editxe.component.html',
  styleUrls: ['./editxe.component.css']
})
export class EditxeComponent implements OnInit, OnDestroy {
  public car:Buffcar;
  public subscription: Subscription;
  public subscriptionParam:Subscription;

  constructor(
    public homestayService : HomestayService,
    public routerService: Router,
    public activatedRouterService:ActivatedRoute
  ) { }

  ngOnInit() {
    this.car=new Buffcar();
    this.loadData();
  }
  loadData(){
    this.subscriptionParam=this.activatedRouterService.params.subscribe((data:Params)=>{
      let id=data['id'];
      this.subscription=this.homestayService.getCar(id).subscribe((car:Buffcar)=>{
        this.car=car;
      });
    });
  }
  onEditXe(){
    this.subscription=this.homestayService.editCar(this.car).subscribe((data:Buffcar)=>{
      this.routerService.navigateByUrl('admin/xe');
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
