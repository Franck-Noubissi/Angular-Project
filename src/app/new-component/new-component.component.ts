import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.scss']
})
export class NewComponentComponent {

  FormArticle = new FormGroup({

    name : new FormControl('',[Validators.required]),
    description : new FormControl('',Validators.required),
    short_description : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required)

  })

  constructor(private articleService: ArticlesService, private router : Router){}

  onSubmit(){
    console.log(this.FormArticle.value)
    let credentials = {...this.FormArticle.value}
    this.articleService.addArticle(credentials).subscribe({
      next: (data) => {

        console.log(data)

      },
      error: (error) => {
         console.log(error)
      }
    })


  }

}
