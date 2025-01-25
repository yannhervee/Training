import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  private scrollPosition = 0;
  constructor() { }
  
  setScrollPosition(position: number): void{
    this.scrollPosition = position;
  }

  getScrollPosition(): number{
    return this.scrollPosition;
  }
  
}
