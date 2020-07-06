import { Component, OnInit, OnDestroy } from '@angular/core';
import { Homestay } from 'src/app/models/homestay.model';
import { Subscription } from 'rxjs';
import { HomestayService } from 'src/app/services/homestay.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addphong',
  templateUrl: './addphong.component.html',
  styleUrls: ['./addphong.component.css']
})
export class AddphongComponent implements OnInit, OnDestroy {
  public phong : Homestay;
  public subscription : Subscription;
  constructor(
    public homestayService : HomestayService,
    public routerService : Router
    ) { }

  ngOnInit() {
    this.phong=new Homestay();
  }
  onAddPhong(){
    this.subscription=this.homestayService.addHomestay(this.phong).subscribe(data=>{
      if(data && data.id){
        this.routerService.navigate(['admin/phong'])
      }
    });
  }  
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
