import { Component, OnInit, OnDestroy } from '@angular/core';
import { Homestay } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-editphong',
  templateUrl: './editphong.component.html',
  styleUrls: ['./editphong.component.css']
})
export class EditphongComponent implements OnInit,OnDestroy {
  public phong:Homestay;
  public subscription: Subscription;
  public subscriptionParams: Subscription;
  constructor(
    public homestayService:HomestayService,
    public routerService: Router,
    public activatedRouteService:ActivatedRoute
  ) { }

  ngOnInit() {
    this.phong= new Homestay();
    this.loadData();
  }
  loadData(){
    this.subscriptionParams = this.activatedRouteService.params.subscribe((data:Params)=>{
      let id = data['id'];
      this.subscription=this.homestayService.getHome(id).subscribe((phong:Homestay)=>{
        this.phong=phong;
      });
    });
  }
  onEditPhong(){
    this.subscription=this.homestayService.editHome(this.phong).subscribe((data:Homestay)=>{
      this.routerService.navigateByUrl('admin/phong');
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
