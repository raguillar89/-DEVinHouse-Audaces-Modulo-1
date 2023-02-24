import { Component, OnInit } from '@angular/core';
import { Personagem } from 'src/app/model/personagem';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars-create',
  templateUrl: './starwars-create.component.html',
  styleUrls: ['./starwars-create.component.scss']
})
export class StarwarsCreateComponent implements OnInit {

  personagem: Personagem = {
    nome: '',
    habilidade: '',
    planeta: '',
    armas: '',
    avatar: ''
  }

  constructor(private starwarsService: StarwarsService) {}

  ngOnInit(): void {}
}
