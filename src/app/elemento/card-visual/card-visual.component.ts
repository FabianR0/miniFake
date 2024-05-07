import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConexionService } from 'src/app/servicio/conexion.service';
import { MatTabGroup } from '@angular/material/tabs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-visual',
  templateUrl: './card-visual.component.html',
  styleUrls: ['./card-visual.component.css']
})
export class CardVisualComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  p: number = 1;
  public users: any;
  constructor(private conexionService: ConexionService) { }

  // userToEdit: any;
  @ViewChild(MatTabGroup)
  tabGroup!: MatTabGroup;
  twoToElement(user: any ): void {
    // this.userToEdit = user;
    // this.fillCuerpo(user);

    // const element = document.getElementById('dir');
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    // }
    this.fillCuerpo(user);

  // Cambia a la pestaña de edición (asumiendo que es la segunda pestaña, con índice 1)
  this.tabGroup.selectedIndex = 1;

  // Espera un ciclo de renderizado para que el cambio de pestaña se complete
  setTimeout(() => {
    const element = document.getElementById('dir');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
  }, 0);
  }
  public isJsonString(str: string) {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  }
  ngOnInit() {
    // this.conexionService.getUsers().subscribe(data => {
    //   this.users = data;
    //   this.users.map((item: any) =>{
    //     let imageStrin = JSON.stringify(item.images);
    //     let imagenNo = imageStrin
    //       .substring(2,imageStrin.length -2 )
    //       .replaceAll('\\',' ')
    //       .replaceAll('"', '"')
    //       .replaceAll('" "', '"')
    //       .replaceAll(' ','');
    //       try {
    //         item.images = JSON.parse(imagenNo);
    //       } catch (e) {
    //         console.log(e);
    //       }
    //     });
    //   // this.users.images.console.log(this.users);
    //   console.log(this.users);
    // });
    this.conexionService.getUsers().subscribe(data => {
      this.users = data;
      this.users.forEach((item: any) => {
        const imageStrin = JSON.stringify(item.images);
        if (this.isJsonString(imageStrin)) {
          item.images = JSON.parse(imageStrin);
        } else {
          console.log('El valor de item.images no es un objeto JSON válido.');
        }
      });
      console.log(this.users);
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
      images: producto.images,
    };
  }, 50);
}

  deleteUser(id: any) {
    // this.conexionService.deleteUser(id).subscribe(() => {
    //   console.log('El producto se eliminó correctamente');
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "bg-red-500 rounded font-bold py-2 px-4 text-white ml-2",                  // el resto el diseño del alert
        cancelButton: "bg-lime-600 rounded font-bold py-2 px-4 text-white"
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
