import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationService } from './services/configuration.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ ConfigurationService ]
})
export class CoreModule { }
