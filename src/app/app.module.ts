import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from '../components/containers/navbar/navbar.component';
import {HeroPanelComponent} from '../components/panels/hero-panel/hero-panel.component';
import {HeroContainerComponent} from '../components/containers/hero-container/hero-container.component';
import {CardComponent} from '../components/atoms/card/card.component';
import {CardContainerComponent} from '../components/containers/card-container/card-container.component';
import {SearchBarComponent} from '../components/containers/search-bar.component';
import {BlogPost} from '../mock-data/blog-06-19-21';
import {MasterService} from '../services/master.service';
import {BlogContainerComponent} from '../components/containers/blog-container/blog-container.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import {globalReducer} from './reducers/global.reducers';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroPanelComponent,
    HeroContainerComponent,
    CardComponent,
    CardContainerComponent,
    SearchBarComponent,
    BlogContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ global: globalReducer })
  ],
  providers: [
    MasterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
