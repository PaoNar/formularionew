import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formulario';
  crearform: FormGroup;
  cedula:any;
  nombre:any;
  telefono:any;
  direccion:any;
  email:any;


  constructor(private fb: FormBuilder){}

  


  ngOnInit(){
    this.form_proveedor();
  }



  form_proveedor(){
    this.crearform= this.fb.group({
      cedula:['',Validators.required,Validators.pattern('([0|1|2]{1})([0-9]{9})')],
      nombre:['',Validators.required,Validators.pattern('[A-Za-z]{1}[a-z]{3,30}')],
      telefono:['',Validators.required, Validators.pattern('((09){1})([0-9]{8})')],
      email:['', Validators.required, Validators.pattern('[A-Za-z]{16}+@[a-z]+.[a-z]{2-3}')],
      direccion:['999',Validators.required]

    })
  }






  verificar(){
    if(!this.crearform.valid){
      alert('Correcto')
    }else{
      alert('Incompleto')
    }
  


  this.cedula= this.crearform.controls['cedula'].errors;
  console.log (this.cedula)
  if (this.cedula){
    alert( JSON.stringify (this.cedula))

  }
  

  this.nombre= this.crearform.controls['nombre'].errors;
  console.log(this.nombre)
  if(this.nombre){
    alert(JSON.stringify(this.nombre))
  }


  this.telefono= this.crearform.controls['telefono'].errors;
  console.log(this.telefono)
  if(this.telefono){
    alert(JSON.stringify(this.telefono))
  }


  this.direccion= this.crearform.controls['direccion'].errors;
  console.log(this.direccion)
  if(this.direccion){
    alert(JSON.stringify(this.direccion))
  }


  this.email=this.crearform.controls['email'].errors;
  console.log(this.email)
  if(this.email){
    alert(JSON.stringify(this.email))
  }
 }
}
