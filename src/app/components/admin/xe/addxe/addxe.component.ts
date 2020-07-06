import { Component, OnInit, OnDestroy } from '@angular/core';
import { Buffcar } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addxe',
  templateUrl: './addxe.component.html',
  styleUrls: ['./addxe.component.css']
})
export class AddxeComponent implements OnInit, OnDestroy {
  public car:Buffcar;
  public subscription:Subscription;
  constructor(
    public homestayService: HomestayService,
    public routerService: Router
  ) { }

  ngOnInit() {
    this.car=new Buffcar();
    console.log(this.car);
  }
  onAddXe(){
    this.subscription=this.homestayService.addCar(this.car).subscribe(data=>{
      if(data && data.id){
        this.routerService.navigate(['admin/xe']);
      }
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
