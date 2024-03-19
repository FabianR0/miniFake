import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/servicio/conexion.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent  implements OnInit {

  constructor(private conexionService : ConexionService){}
  users: any;
  ngOnInit() {
    
  }
  formulario = new FormGroup({
    // id : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required ,Validators.minLength(15)]),
    price : new FormControl('',[Validators.required]),
    description : new FormControl('',[Validators.required]),
    categoryId : new FormControl(5,[Validators.required]),
    image : new FormControl('',[Validators.required])
  })
  // let body = {
  //     id : this.formulario.value.id,
  //     title: this.formulario.value.title,
  //     price: this.formulario.value.price,
  //     description: this.formulario.value.description,
  //     image: [this.formulario.value.image]
  //   }
  saveUser() { //post
    // console.log(this.formulario.value);
    // let informacion = this.formulario.value;
    // 
    // console.log(body);
    
    this.conexionService.addUser(this.formulario.value).subscribe(data => {
      console.log('la respuesta fue: ',data);
      
    });
  }
}
