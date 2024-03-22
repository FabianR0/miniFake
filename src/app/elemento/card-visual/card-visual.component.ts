import { Component, OnInit, ViewChild } from '@angular/core';
import { ConexionService } from 'src/app/servicio/conexion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-visual',
  templateUrl: './card-visual.component.html',
  styleUrls: ['./card-visual.component.css']
})
export class CardVisualComponent implements OnInit {
  

  p: number = 1;
  
  users: any;
  constructor(private conexionService: ConexionService) { }

  ngOnInit() {
    this.conexionService.getUsers().subscribe(data => {
      this.users = data;
      this.users.map((item: any) =>{
        let imageStrin = JSON.stringify(item.images);
        let imagenNo = imageStrin
          .substring(2,imageStrin.length -2 )
          .replaceAll('\\',' ')
          .replaceAll('"', '"')
          .replaceAll('" "', '"')
          .replaceAll(' ','');
          try {
            item.images = JSON.parse(imagenNo);
          } catch (e) {
            console.log(e);
          }
        });
      this.users.images.console.log(this.users)
    });
}
 
public body : any = null ;

fillCuerpo(producto: any) { // aqui tomamos y insertamos los valores a actualizar
  this.body = null;
  setTimeout(() => {
    this.body = {
      id: producto.id,
      title: producto.title,
      price: producto.price,
      description: producto.description,
      categoryId: producto.category.id,
      images: producto.images[0],
    };
  }, 50);
}

  deleteUser(id: any) {
    // this.conexionService.deleteUser(id).subscribe(() => {
    //   console.log('El producto se eliminó correctamente');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",                  // el resto el diseño del alert
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Esta seguro?",
      text: "¡No podras revertir esto!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.conexionService.deleteUser(id).subscribe(data =>{   //
          console.log('si esta eliminando: ',data);              //mi codigo eliminar 
        })                                                       //
        swalWithBootstrapButtons.fire({
          title: "Eliminado!",
          text: "Su archivo ha sido eliminado.",
          icon: "success"
        }).then(() => {
          window.location.reload(); // Recargar la página
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Tu archivo imaginario está a salvo :)",
          icon: "error"
        });
      }
    });
  }
}
