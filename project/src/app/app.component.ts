import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemComponent } from './components/item/item.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';
  counter = signal<number>(0);
  list = signal<string[]>(["banana", "apple", "mango"])

  computatedNumber = computed(()=>{
    return this.counter() + 100;
  })

  increment() : void {
    this.counter.set(this.counter() + 1);
  }
  decrement() : void {
    this.counter.update((n) => {
      return n-1;
    })
  }
  printEmit(data: string) {
    console.log(data);
  }
}
