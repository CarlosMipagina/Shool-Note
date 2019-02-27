import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponetModule} from '../app/modulo/material-componet/material-componet.module'
import { FontAwesomeModule } from  '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule,FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './componet/login/login.component';


@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		MaterialComponetModule,
		BrowserAnimationsModule,
		FontAwesomeModule,
		ReactiveFormsModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
