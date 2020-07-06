import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Homestay } from 'src/app/models/homestay.model';
import { HomestayService } from 'src/app/services/homestay.service';

@Component({
  selector: 'app-phong',
  templateUrl: './phong.component.html',
  styleUrls: ['./phong.component.css']
})
export class PhongComponent implements OnInit, OnDestroy {
  public subscription : Subscription;
  public phong : Homestay[]=[];
  constructor(public homestayService : HomestayService ) {}

  ngOnInit() {
    this.subscription=this.homestayService.getAllHomestay().subscribe((data:Homestay[])=>{
      this.phong=data;
      //console.log(this.subscription);
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
  onDeletePhong(id:number){
    this.subscription=this.homestayService.deleteHome(id).subscribe((data:Homestay)=>{
      this.updateDataAfterDel(id);
    });
  }
  updateDataAfterDel(id:number){
    for(var i=0;i<this.phong.length;i++){
      if(this.phong[i].id==id){
        this.phong.splice(i,1);
        break;
      }
    }
  }

}
