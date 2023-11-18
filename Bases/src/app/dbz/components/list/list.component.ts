import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input()
public characterList:Character[]=[{
  name:'Trunks',
  power:10
}]

//Index value: number
@Output()
ondelete:EventEmitter<number> = new EventEmitter();

onDeleteCharacter(index:number):void{
//TODO: Emitir el ID del personaje
this.ondelete.emit(index);
}
}
