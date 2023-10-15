import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
    constructor(){

    }
    ngOnInit(): void{

    }
    products =[
      {
        id:1,name: "jd"
      },
      {
        id:2,name: "sara"
      },
      {
        id:3,name: "nisa"
      },
    ]
}
