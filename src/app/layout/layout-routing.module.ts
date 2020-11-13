import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IndexComponent} from './index/index.component';
import {DetailsComponent} from '../details/details.component';


const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./content/detail-film.module').then(m => m.DetailFilmModule)

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
