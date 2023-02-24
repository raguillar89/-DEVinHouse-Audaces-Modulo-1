import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personagem } from 'src/app/model/personagem';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.scss']
})
export class StarwarsComponent implements OnInit{

  personagens!: Personagem[];
  IsHiddenHabilidade = false;
  IsHiddenPlaneta = false;
  IsHiddenArmas = false;

  constructor(private starwarsService: StarwarsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.starwarsService.findAll().subscribe((personagens) => {
      this.personagens = personagens;
    })
  }

  onSelectHabilidade() {
    this.IsHiddenHabilidade = !this.IsHiddenHabilidade;
  }

  onSelectPlaneta() {
    this.IsHiddenPlaneta = !this.IsHiddenPlaneta;
  }

  onSelectArmas() {
    this.IsHiddenArmas = !this.IsHiddenArmas;
  }
}
