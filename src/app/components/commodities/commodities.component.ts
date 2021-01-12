import { Component, OnInit } from '@angular/core';
import { ListPandaService } from '../../services/list-panda.service';

@Component({
  selector: 'app-commodities',
  templateUrl: './commodities.component.html',
  styleUrls: ['./commodities.component.css']
})
export class CommoditiesComponent implements OnInit {

  Info: any;
  commodities: any;

  constructor(private listPandaService: ListPandaService) {
    this.Info = {};
    this.commodities = [];
   }

  ngOnInit(): void {
    this.getCommodities();
  }

  getCommodities() {
    this.listPandaService.getInfo().subscribe(data => {
      this.Info = data.data.attributes

      this.commodities = this.Info.commodities;

      console.log(this.commodities)
    
  
    })
  }

}
