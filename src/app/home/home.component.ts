import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProserviceService } from '../proservice.service';
import { fromEvent, interval, map, of, range } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,AfterViewChecked{
  @ViewChild('show') show!: ElementRef
  exclusive:boolean=false
   broadcast=interval(2000)
constructor(private proserv:ProserviceService){

}
products:any[]=[]
ngOnInit(): void {
  this.proserv.getAllProducts().subscribe((res:any)=>{
    this.products=res.data
    console.log(this.products)
  })
  
}

ngAfterViewChecked(): void {
  if (this.show) {
    fromEvent(this.show.nativeElement, 'click').subscribe(event => {
      console.log("From event", event);
    });
  }
else{
  console.log("error")
}
}
name:string[]=[]

obser=of(1,2,3).pipe(map(
n=>range(n,5)
)).subscribe((res)=>{
  // console.log(res)
  res.subscribe((las)=>{
    console.log(las)
  })
})
obser2=of("krishna","abhi","tarun").subscribe((res)=>{console.log(res)
})
}
