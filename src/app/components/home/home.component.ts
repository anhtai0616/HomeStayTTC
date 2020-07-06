import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomestayService } from './../../services/homestay.service';
import { from } from 'rxjs';
import { Subscription } from 'rxjs';
import { Homestay } from 'src/app/models/homestay.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public subscription : Subscription;
  public homestay : Homestay[]=[];

  constructor(public homestayService : HomestayService) { }

  ngOnInit() {
    this.subscription = this.homestayService.getAllHomestay().subscribe((data : Homestay[]) => {
      this.homestay = data;
      console.log(this.homestay);
    });
  }
  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
