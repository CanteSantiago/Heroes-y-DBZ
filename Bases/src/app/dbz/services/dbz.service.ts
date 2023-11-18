
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.inteface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {


  public characters:Character[] = [{
    name:'Krillin',
    power:1000
  },{
  name:'Goku',
    power:9500
  },{
    name:'Vegeta',
      power:7500
    }
  ];
  onNewCharacter(Character:Character):void{
  this.characters.push(Character);
    // console.log('MainPage')
  //   console.log(Character)
  }

  onDeleteCharacter(index:number){
    this.characters.splice(index,1);
  }
}
