import { Component, Input, OnInit, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { DetailComponent } from './detail/detail.component';
@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() data:any
  @Input() tableHeader:string[]
  @Output() pagination=new EventEmitter()
  @Output() userData=new EventEmitter()
  @Input() receivedUserData:any
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log(this.data);
    
  }
  ngOnChanges(changes:SimpleChanges){
    for(const propName in changes){
      if(changes.hasOwnProperty(propName)){
        switch (propName){
          case 'receivedUserData':{
            this.modalOpen()
          }
        }
      }
    }
  }

  paginationChaneg(i?:number){
    if(i) this.data.page = this.data.page + i
    this.pagination.emit({page:this.data.page,per_page:this.data.per_page})
  }
  getUserData(id:number){
    this.userData.emit(id)
  }
  modalOpen(){
    if(this.receivedUserData.id>0){
      let modalRef=this.modalService.open(DetailComponent ,{size:'sm'})
      modalRef.componentInstance.userData=this.receivedUserData
      return modalRef
    }else return
    
  }
  sortBy(type:string){
    this.data.data.sort((a:any,b:any)=>{
      return a[type].localeCompare(b[type])
    })
  }
}
