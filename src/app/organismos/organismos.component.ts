import { Component, OnInit } from '@angular/core';
import { OrganismosService } from '../services/organismos.service';

@Component({
  selector: 'app-organismos',
  templateUrl: './organismos.component.html',
  styleUrls: ['./organismos.component.css']
})
export class OrganismosComponent implements OnInit {

  Organismo = {
    id: '',
    name: '',
    parent: 0
  }

  organismosData: Array<any> = [];

  constructor(private organismosServices: OrganismosService) {
    //console.log(this.organismosData);

   }

  ngOnInit(): void {
    this.get();
    console.log(this.organismosData);
  }

  get(){
    this.organismosServices.getData().subscribe((data:any) =>{
      this.organismosData = data.data;
      this.organismosData.sort(function (a,b) {
        if (a.Parent > b.Parent) { return 1 }
        if (a.Parent < b.Parent) { return -1 }
        return 0
      });

      console.log(this.organismosData);
    });
  }


}
