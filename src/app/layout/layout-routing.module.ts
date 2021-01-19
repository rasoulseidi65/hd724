import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {CartComponent} from './cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./content/detail-film.module').then(m => m.DetailFilmModule)
  },
  {
    path: 'detailArticle/:id',
    loadChildren: () => import('./article/detailarticle/detailarticle.module').then(m => m.DetailarticleModule)
  },
  {
    path: 'cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
