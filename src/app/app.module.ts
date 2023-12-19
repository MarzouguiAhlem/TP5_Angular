// Import required modules from Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule for two-way data binding
import { AppRoutingModule } from './app-routing.module';

// Import components and services used in the application
import { AppComponent } from './app.component';
import { ActionComponent } from './components/action/action.component';
import { MemberComponent } from './components/member/member.component';
import { ActionListComponent } from './components/action-list/action-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ActionService } from './services/action.service';
import { StatisticsComponent } from './components/statistics/statistics.component';

@NgModule({
  declarations: [
    // Declare all components used in the application
    AppComponent,
    ActionComponent,
    MemberComponent,
    ActionListComponent,
    HeaderComponent,
    LandingPageComponent,
    StatisticsComponent,
  ],
  imports: [
    // Import necessary modules for the application
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Add FormsModule for two-way data binding
  ],
  providers: [ActionService],  // Provide the ActionService globally in the application
  bootstrap: [AppComponent],  // Bootstrap the AppComponent as the starting point of the application
})
export class AppModule {}

