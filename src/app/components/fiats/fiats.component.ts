import { Component, OnInit } from '@angular/core';
import { ListPandaService } from '../../services/list-panda.service';

@Component({
  selector: 'app-fiats',
  templateUrl: './fiats.component.html',
  styleUrls: ['./fiats.component.css']
})
export class FiatsComponent implements OnInit {
  
  Info: any;
  fiats: any;


  constructor(private listPandaService: ListPandaService) {
    this.Info = {};
    this.fiats = [];
   }

  ngOnInit(): void {
    this.getFiats();
  }

  
  getFiats() {
    this.listPandaService.getInfo().subscribe(data => {
      this.Info = data.data.attributes

      this.fiats = this.Info.fiats;

      console.log(this.fiats)
    })
  }

}
