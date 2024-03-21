import { Component, OnInit  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/servicio/conexion.service';
import Swal from 'sweetalert2';

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
  
  
  saveUser() { //post
    // console.log(this.formulario.value);
    // let informacion = this.formulario.value;
    // 
    
    const body = {
      // id : this.formulario.value.id,
      title: this.formulario.value.title,
      price: this.formulario.value.price,
      description: this.formulario.value.description,
      categoryId : this.formulario.value.categoryId,
      images: [this.formulario.value.image]
    }
    // console.log(body);
    this.conexionService.addUser(body).subscribe(data => {
      // console.log('la respuesta fue: ',data);
      Swal.fire({ // aqui el diseño del alert
        position: "top",
        icon: "success",
        title: "Tu datos han sido guardado.",
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        window.location.reload(); // Recargar la página
      });
    });
  }
}
