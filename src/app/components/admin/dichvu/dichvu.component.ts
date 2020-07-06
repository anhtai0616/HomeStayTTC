import { Component, OnInit, OnDestroy } from '@angular/core';
import { Air } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.css']
})
export class DichvuComponent implements OnInit, OnDestroy {
  public air : Air[]=[];
  public subscription:Subscription;
  constructor(
    public homestayService:HomestayService
  ) { }

  ngOnInit() {
    this.subscription=this.homestayService.getAllAir().subscribe((data:Air[])=>{
      this.air=data;
    });
  }
  onDeleteDichvu(id:number){
    this.subscription=this.homestayService.deleteAir(id).subscribe((data:Air)=>{
      this.updateAirAfterDel(id);
    });
  }
  updateAirAfterDel(id:number){
    for(var i=0;i<this.air.length;i++){
      if(this.air[i].id==id){
        this.air.splice(i,1);
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
