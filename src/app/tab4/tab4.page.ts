import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {


  constructor(public fotoService:FotoService) {}

  async ngOnInit(){
    await this.fotoService.loadFoto();
  }

}
