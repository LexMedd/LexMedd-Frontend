import { Component } from '@angular/core';

@Component({
  selector: 'app-header',  // Selector que vas a usar en tu HTML
  template: `<header><h2>Header</h2></header>`,  // Template sencillo
  styles: [`header { background: #333; color: white; padding: 1em; text-align: center; }`]  // Estilos básicos
})
export class HeaderComponent { }
