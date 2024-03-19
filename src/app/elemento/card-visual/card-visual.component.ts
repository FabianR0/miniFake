import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/servicio/conexion.service';


@Component({
  selector: 'app-card-visual',
  templateUrl: './card-visual.component.html',
  styleUrls: ['./card-visual.component.css']
})
export class CardVisualComponent implements OnInit{
  
  users: any;

  constructor(private conexionService : ConexionService){}
  ngOnInit() {
      this.conexionService.getUsers().subscribe(data => {
        this.users = data;
        console.log(this.users)
      });
  }
  deleteUser(id: any) {
    // this.conexionService.deleteUser(id).subscribe(() => {
    //   console.log('El producto se eliminó correctamente');

    this.conexionService.deleteUser(id).subscribe(data =>{
      console.log('si esta eliminando: ',data);
      
    })
  }
}
