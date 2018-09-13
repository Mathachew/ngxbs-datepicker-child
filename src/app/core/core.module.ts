import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports: [ CommonModule, RouterModule, HttpClientModule ],
    exports: [ RouterModule, HttpClientModule ],
    declarations: [],
    providers: []
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() targetModule: CoreModule) {
        if (targetModule) {
            throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
        }
    }
}
