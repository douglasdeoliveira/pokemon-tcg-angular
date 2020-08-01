import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { OrderbyPipe } from './pipes';

@NgModule({
  declarations: [HeaderComponent, OrderbyPipe],
  imports: [CommonModule],
  exports: [HeaderComponent, OrderbyPipe],
})
export class SharedModule {}
