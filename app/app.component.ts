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
        </form>
        <h2>{{hero.name}} details!</h2>
        <div><label>id: </label>{{hero.id}}</div>
        <div><label>name: </label>{{hero.name}}</div>
      </div>
    </div>
  </div>

  `
})
export class AppComponent {
  title = "Blur of Heroes";
  hero = new Hero;
}
