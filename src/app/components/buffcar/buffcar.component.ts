import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomestayService } from './../../services/homestay.service';
import { from, Subscription } from 'rxjs';
import { Buffcar } from 'src/app/models/homestay.model';
@Component({
  selector: 'app-buffcar',
  templateUrl: './buffcar.component.html',
  styleUrls: ['./buffcar.component.css']
})
export class BuffcarComponent implements OnInit, OnDestroy {
  public subcription: Subscription;
  public car:Buffcar[]=[];
  constructor(public homestayService : HomestayService) { }

  ngOnInit() {  
    this.subcription=this.homestayService.getAllCar().subscribe((data:Buffcar[])=>{
      this.car=data;
    });
  }
  ngOnDestroy(){
    if(this.subcription){
      this.subcription.unsubscribe();
    }
  }

}
