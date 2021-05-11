
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { postagem } from '../model/postagem';
import { tema } from '../model/tema';
import { User } from '../model/User';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaPostagens: postagem[]
  postagem: postagem = new postagem()

  listaTemas: tema[]
  idTema: number
  tema: tema = new tema()
  user: User = new User()
  isUser = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService
    
  ){ }

  ngOnInit(){

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.getAllTemas()
    this.getAllPostagens()
  }
  getAllTemas(){
    this.temaService.getAllTema().subscribe((resp: tema[])=>{
      this.listaTemas = resp
    })

  }
  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: tema)=>{
      this.tema = resp
    })
  }
  getAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: postagem[])=>{
      this.listaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.user.id = this.isUser
    this.postagem.usuario = this.user

    this.postagemService.postPostagem(this.postagem).subscribe((resp: postagem)=>{
      this.postagem = resp
      alert('Postagem realizada com sucesso!')
      this.postagem = new postagem()
    })
  }
}
