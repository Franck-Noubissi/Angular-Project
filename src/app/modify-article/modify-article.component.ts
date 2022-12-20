import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../services/articles/articles.service';

@Component({
  selector: 'app-modify-article',
  templateUrl: './modify-article.component.html',
  styleUrls: ['./modify-article.component.scss']
})
export class ModifyArticleComponent implements OnInit{

  FormArticle = new FormGroup({
    id : new FormControl(''),
    created_at : new FormControl(''),
    name : new FormControl('',[Validators.required]),
    description : new FormControl('',Validators.required),
    short_description : new FormControl('',Validators.required),
    image : new FormControl('',Validators.required)

  })

  constructor(private articleService: ArticlesService, private router : ActivatedRoute){}
  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.articleService.getArticleById(param['id']).subscribe((data: any) => {
        this.FormArticle.setValue(data[0])
      })
    })
  }

  onSubmit(){
    console.log(this.FormArticle.value)
    let credentials = {...this.FormArticle.value}
    this.articleService.updateArticle(credentials).subscribe({
      next: (data) => {

        console.log(data)

      },
      error: (error) => {
         console.log(error)
      }
    })


  }

}
