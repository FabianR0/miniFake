import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConexionService } from 'src/app/servicio/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent {
  constructor(private conexionService: ConexionService){
  }
  ngOnInit() {
    this.fillOut();
  }

  @Input() body : any = null;
  formulario = new FormGroup({
    id : new FormControl('',[Validators.required]),
    title : new FormControl('',[Validators.required ,Validators.minLength(15)]),
    description : new FormControl('',[Validators.required]),
    images : new FormControl('',[Validators.required]),
    price : new FormControl('',[Validators.required])
  })
  public fillOut(){
    
    if (this.body != null) {
      this.formulario.setValue({
        id: this.body.id,
        title: this.body.title,
        price: this.body.price,
        description: this.body.description,
        images: this.body.images,
      });
    }
  } 
  public editorUser() { //put 
    //  console.log('este es el formulario',this.formulario.value);
    let body = {
      id:this.formulario.get('id')?.value,
      title : this.formulario.get('title')?.value,
      description : this.formulario.get('description')?.value,
      price : this.formulario.get('price')?.value,
      images : this.formulario.get('images')?.value
    }
    let cont = this.formulario.get('id')?.value;
    this.conexionService.updateUser(cont,body).subscribe(data => {
      Swal.fire({ // aqui el diseño del alert
        position: "top",
        icon: "success",
        title: "Tu datos han sido actualizado.",
        showConfirmButton: false,
        timer: 1000
      }).then(() => {
        window.location.reload(); // Recargar la página
      });
       console.log('la respuesta fue: ',data);
    });
  }
}
