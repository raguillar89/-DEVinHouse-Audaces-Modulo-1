import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personagem } from 'src/app/model/personagem';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars-update',
  templateUrl: './starwars-update.component.html',
  styleUrls: ['./starwars-update.component.scss']
})
export class StarwarsUpdateComponent {
  personagem!: Personagem;

  constructor(private starwarsService: StarwarsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.starwarsService.findById(id).subscribe(resposta => {
      this.personagem = resposta;
    })
  }

  updatePersonagem(): void {
    this.starwarsService.update(this.personagem).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
