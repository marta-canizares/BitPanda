import { Component, OnInit } from '@angular/core';
import { ListPandaService } from '../../services/list-panda.service';

@Component({
  selector: 'app-cryptocoins',
  templateUrl: './cryptocoins.component.html',
  styleUrls: ['./cryptocoins.component.css']
})
export class CryptocoinsComponent implements OnInit {

  Info: any;
  cryptocoins: any;


  constructor(private listPandaService: ListPandaService) {
    this.Info = {};
    this.cryptocoins = [];
 

   }

  ngOnInit(): void {
    this.getCrypto();
  }

  getCrypto() {
    this.listPandaService.getInfo().subscribe(data => {
      this.Info = data.data.attributes

      this.cryptocoins = this.Info.cryptocoins;
 
      console.log(this.cryptocoins)
    
    })
  }

}
