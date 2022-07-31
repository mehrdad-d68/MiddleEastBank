import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MiddleEastBank';
  data:any
  header=['first_name','last_name','email']
  loadUserData={}
  constructor(private appService:AppService){}

  ngOnInit(){
    this.appService.getAllData().subscribe(res=>{
      this.data=res
    })
  }
  changePagination(event:any){
    let params=new HttpParams()
    params = params.append('page',event.page)
    params = params.append('per_page',event.per_page)
    this.appService.getAllData(params).subscribe(res=>{
      this.data=res
    })
  }
  getUserData(id:number){
    this.appService.getUser(id).subscribe(
      (res:any)=>{
        this.loadUserData=res.data
        console.log(res.data)
    })
  }

}
