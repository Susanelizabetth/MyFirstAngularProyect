import { Component } from '@angular/core';
import { Product } from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'susana';
  age = 21;
  img = 'https://picsum.photos/200/300';
  btnDisabled = true;
  person = {
    name: 'susana',
    age: 21,
    img: 'https://picsum.photos/200/300',
  };
  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  ageIncrease() {
    this.person.age++;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  names: string[] = ['Uno', 'Dos', 'Tres', 'Cuatro', 'Cinco'];
  newName = '';

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }

  productos: Product[] = [{
    nombre: 'producto 1',
    price: '$10',
    img: 'https://picsum.photos/200/300',
    category: 'categoria 1',

  }, {
    nombre: 'producto 2',
    price: '$20',
    img: 'https://picsum.photos/200/300',
  },{
    nombre: 'producto 3',
    price: '$30',
    img: 'https://picsum.photos/200/300',
  },{
    nombre: 'producto 4',
    price: '$40',
    img: 'https://picsum.photos/200/300',
  },{
    nombre: 'producto 5',
    price: '$50',
    img: 'https://picsum.photos/200/300',
  }]

}
