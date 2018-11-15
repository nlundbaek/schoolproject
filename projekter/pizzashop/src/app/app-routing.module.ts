import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";

const appRoutes: Routes = [
// http://localhost:4200/foo
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( // Routes valid everywhere
      appRoutes, // Actual route definitions
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  exports: [RouterModule], // Export so routes can be used in other modules
})
export class AppRoutingModule {


}
