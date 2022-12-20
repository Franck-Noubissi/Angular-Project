import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ArticleItemComponent } from './articles/article-item/article-item.component';
import { ConnexionComponent } from './authentification/connexion/connexion.component';
import { InscriptionComponent } from './authentification/inscription/inscription.component';
import { BackOfficeComponentComponent } from './back-office-component/back-office-component.component';
import { LoginComponent } from './login/login.component';
import { ModifyArticleComponent } from './modify-article/modify-article.component';
import { NewComponentComponent } from './new-component/new-component.component';
import { AuthGuard } from './utils/auth.guard';

const routes: Routes = [
  { path: "articles-items", component: ArticleItemComponent },
  { path: "article-details/:id", component: ArticleDetailsComponent },
  { path: "inscription", component: InscriptionComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "login", component:LoginComponent },
  { path: "back-office", component: BackOfficeComponentComponent, canActivate: [AuthGuard], children: [
    {path:'', component:AdminHomeComponent},
    {path: 'addArticle', component: NewComponentComponent},
    {path: 'modifyArticle/:id', component: ModifyArticleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
