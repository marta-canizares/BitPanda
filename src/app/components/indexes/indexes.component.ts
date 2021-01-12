import { Component, OnInit } from '@angular/core';
import { ListPandaService } from '../../services/list-panda.service';

@Component({
  selector: 'app-indexes',
  templateUrl: './indexes.component.html',
  styleUrls: ['./indexes.component.css']
})
export class IndexesComponent implements OnInit {

  Info: any;
  indexes: any;

  constructor(private listPandaService: ListPandaService) {
    this.Info = {};
    this.indexes = [];
  

   }

  ngOnInit(): void {
    this.getIndex();

  }


  getIndex() {
    this.listPandaService.getInfo().subscribe(data => {
      this.Info = data.data.attributes

      this.indexes = this.Info.indexes;

      console.log(this.indexes)
  
    })
  }

}
