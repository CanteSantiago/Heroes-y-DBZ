import { Component } from '@angular/core';
import { Character } from '../interfaces/character.inteface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {
constructor(public DbzService:DbzService){

}
}
