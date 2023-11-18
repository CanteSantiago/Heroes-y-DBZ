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
public ondelete:EventEmitter<string> = new EventEmitter();

onDeleteCharacter(id?:string):void{

  if(!id)return;
console.log({id})
// if (!id) return;
this.ondelete.emit(id);
}
}
