import { NgModule } from '@angular/core';

import { MatCardModule, MatButtonModule } from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
imports: [ MatCardModule, FlexLayoutModule, MatButtonModule ],
exports: [ MatCardModule, FlexLayoutModule, MatButtonModule ]
})

export class MaterialMainModule {
}
