import { Component } from '@angular/core';
import { CharacterList } from './components/character-list/character-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterList],
  template: `<app-character-list></app-character-list>`
})
export class App {}