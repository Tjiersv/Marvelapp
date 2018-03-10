import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MyApp } from './app.component';
// pages
import { HomePage } from '../pages/home/home';
import { DetallePage } from '../pages/detalle/detalle';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
// services
import { ComicListService } from './services/comic-list.services';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ComicListService,
    HttpClientModule,
    HttpClient,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
