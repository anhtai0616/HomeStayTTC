import { Component, OnInit, OnDestroy } from '@angular/core';
import { Air } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddichvu',
  templateUrl: './adddichvu.component.html',
  styleUrls: ['./adddichvu.component.css']
})
export class AdddichvuComponent implements OnInit, OnDestroy {
  public air:Air;
  public subscription:Subscription;
  constructor(
    public homestayService:HomestayService,
    public routerService:Router
  ) { }

  ngOnInit() {
    this.air=new Air();
  }
  onAddAir(){
    this.subscription=this.homestayService.addAir(this.air).subscribe((data:Air)=>{
      if(data&&data.id){
        this.routerService.navigateByUrl('admin/dichvu');
      }
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
