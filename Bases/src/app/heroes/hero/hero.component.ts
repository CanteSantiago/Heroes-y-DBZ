import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
public name:string='ironman';
public age: number=45;

get capitalizedName():string{
  return 'Hola mundo'.toUpperCase();
}
getHeroDescription():string {
  return `${ this.name } - ${ this.age }`;
}
changeHero():void {
  this.name = 'Spiderman'
}

changeAge():void {
  this.age = 25;
}
resetForm():void {
  this.name = 'ironman';
  this.age = 45;

//busca todos los h1 y les da el valor de "Desde Angular"
  // document.querySelectorAll('h1')!.forEach( element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>';
    // });
}
}
