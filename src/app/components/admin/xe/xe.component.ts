import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Buffcar } from 'src/app/models/homestay.model';
import { HomestayService } from 'src/app/services/homestay.service';

@Component({
  selector: 'app-xe',
  templateUrl: './xe.component.html',
  styleUrls: ['./xe.component.css']
})
export class XeComponent implements OnInit, OnDestroy {
  public subscription:Subscription;
  public car:Buffcar[];
  constructor(
    public homestayService:HomestayService
  ) { }

  ngOnInit() {
    this.subscription=this.homestayService.getAllCar().subscribe((data:Buffcar[])=>{
      this.car=data;
    });
  }
  onDeleteCar(id:number){
    this.subscription=this.homestayService.deleteCar(id).subscribe((data:Buffcar)=>{
      this.updateDataAfterDel(id);
    });
  }
  updateDataAfterDel(id){
    for(var i=0;i<this.car.length;i++){
      if(this.car[i].id==id){
        this.car.splice(i,1);
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
