import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { ItemsComponent } from './views/items/items.component';

const routes: Routes = [
	{
		path: '',
		component: ItemsComponent,
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: '',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes), SharedModule],
	exports: [RouterModule],
})
export class AppRoutingModule {}
