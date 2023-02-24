import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personagem } from 'src/app/model/personagem';
import { StarwarsService } from 'src/app/services/starwars.service';

@Component({
  selector: 'app-starwars-delete',
  templateUrl: './starwars-delete.component.html',
  styleUrls: ['./starwars-delete.component.scss']
})
export class StarwarsDeleteComponent {
  personagem!: Personagem;

  constructor(private starwarsService: StarwarsService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.starwarsService.findById(id).subscribe(resposta => {
      this.personagem = resposta;
    })
  }

  deletePersonagem(): void {
    this.starwarsService.delete(this.personagem.id).subscribe(() => {
      this.router.navigate(['']);
    })
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
