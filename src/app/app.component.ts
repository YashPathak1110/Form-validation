  import { Component } from '@angular/core';
  import { FormBuilder,FormGroup, Validators } from '@angular/forms';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
  export class AppComponent {
    registerForm!:FormGroup
    title = 'formvalidation';
    submitted = false;

    constructor(private formbuilder: FormBuilder){ }
    
    ngOnInit() {

      this.registerForm = this.formbuilder.group({
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
      })
    }

    onSubmit(){
      this.submitted = true
      if (this.registerForm.invalid){
      return
      }
      alert("Success");
    }
  }
