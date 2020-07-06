import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomestayService } from './../../services/homestay.service';
import { from, Subscription } from 'rxjs';
import { Air } from 'src/app/models/homestay.model';
@Component({
  selector: 'app-buffair',
  templateUrl: './buffair.component.html',
  styleUrls: ['./buffair.component.css']
})
export class BuffairComponent implements OnInit, OnDestroy {
  public air:Air[]=[];
  public subscription : Subscription;
  constructor(public homestayService : HomestayService) { }

  ngOnInit() {
    this.subscription=this.homestayService.getAllAir().subscribe((data:Air[])=>{
      this.air=data;
    })
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
