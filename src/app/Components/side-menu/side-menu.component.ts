import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName:string="Daniel Flores";
  theme: string="";
  widthMenu:number=25;
  visibleMenu: boolean=true;
  alternateVisibility():void{//Alterna la visibilidad del menu
    this.visibleMenu=!this.visibleMenu;
  }
  setTheme(color:string):void{//Cambia el color del menu
    this.theme=color;
  }
setSize():void{
  this.widthMenu+=10;
  if(this.widthMenu>100){
    this.widthMenu=25;
  }
}
toggleTheme() {
  if (this.theme === '#3593E0') {
    this.theme = ''; // Reset to default color
  } else {
    this.theme = '#3593E0';
  }
}
}
