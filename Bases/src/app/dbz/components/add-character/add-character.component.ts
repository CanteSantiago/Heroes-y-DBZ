import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

  @Output()
public onNweCharacter: EventEmitter<Character>= new EventEmitter();


public Character:Character={
name:'',
power:0
};

emitCharacter():void{

// debugger;

  console.log(this.Character)
if(this.Character.name.length===0)return;

this.onNweCharacter.emit(this.Character);

  this.Character={name:'',power:0};
}

}
