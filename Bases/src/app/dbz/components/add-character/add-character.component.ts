import { Component} from '@angular/core';
import { Character } from '../../interfaces/character.inteface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent  {

public Character:Character={
name:'',
power:0
};

emitCharacter():void{
  console.log(this.Character)
}

}
