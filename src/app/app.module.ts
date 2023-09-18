import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentComponent } from './components/assessment-related/assessment/assessment.component';
import { ControlValueAccessorDirective } from './directives/control-value-accessor.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ControlValueAccessorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AssessmentComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
