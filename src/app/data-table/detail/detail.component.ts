import { Component, Input, OnInit } from '@angular/core';


@Component({
    selector:'detail-component',
    templateUrl:'./detail.component.html'
})

export class DetailComponent implements OnInit{

    @Input() userData:any

    constructor(){}

    ngOnInit(): void {
    
    }

}