import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/servicio/conexion.service';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  constructor(private conexionService: ConexionService){
  }
  formulario = new FormGroup({
    id : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required ,Validators.minLength(15)]),
    description : new FormControl('',[Validators.required]),
    // category : new FormControl('',[Validators.required]),
    image : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required])
  })

  public editorUser() { //put 

    let body = {
      title : this.formulario.get('title')?.value,
      description : this.formulario.get('description')?.value,
      // category : this.formulario.get('category')?.value,
      image : this.formulario.get('image')?.value,
      price : this.formulario.get('price')?.value
    }
    let cont = this.formulario.get('id')?.value;
    this.conexionService.updateUser(cont,body).subscribe(data => {
      console.log('la respuesta fue: ',data);
    });
  }
}
