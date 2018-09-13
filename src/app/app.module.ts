import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import * as containers from './containers';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { BsDatepickerModule, CollapseModule } from 'ngx-bootstrap';

@NgModule({
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreModule,
        SharedModule,
        BsDatepickerModule.forRoot(),
        CollapseModule.forRoot()
    ],
    declarations: [
        AppComponent,
        Object.keys(containers).map(x => containers[x])
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
