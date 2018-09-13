import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BsDatepickerModule, ModalModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot()
    ],
    exports: [
        CommonModule,
        FormsModule,
        ModalModule
    ],
    declarations: []
})
export class SharedModule {}
