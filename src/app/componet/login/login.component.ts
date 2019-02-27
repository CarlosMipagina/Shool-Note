import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
	faCoffee=faCoffee;
	formLogin:FormGroup;
	constructor( private formBuilder: FormBuilder) { }

	ngOnInit() {
		this.formLogin=this.formBuilder.group({
			usuario:['',[Validators.required,Validators.email]],
			password:['',[Validators.email]]
		})
	}

	login( formValue: any){
		console.log(formValue.value);
	}

}
