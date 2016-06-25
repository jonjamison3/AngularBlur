import { Component } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>

  <div class="row">
    <div class=".col-xs-6 .col-offset-3">
      <div class="container">
        <form>
          <p>Name:
            <input (blur)="hero.name = $event.target.value" type="text"/>
          </p>
          <p>id:
            <input (focus)="hero.id = $event.target.value" type="text"/>
          </p>
          <p>Numero:
            <input [(ngModel)]="numero" type="text"/>
          </p>
        </form>
        <!-- TODO: create array to modify with blur to show working vs non with ngModel-->
        <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div><label>name: </label>{{hero.name}}</div>
        <div><label>numero: </label>{{numero}}</div>
      </div>
    </div>
  </div>

  `
})
export class AppComponent {
  title = "Blur of Heroes";
  hero = new Hero;
  numero: number;
}
