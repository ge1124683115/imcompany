import {NgModule} from '@angular/core';
import {ProjectListComponent} from './project-list/project-list.component';
import {ProjectRoutingModule} from './project-routing.module';
import {SharedModule} from '../shared/shared.module';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { InviteComponent } from './invite/invite.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  exports: [ProjectListComponent],
  declarations: [
    ProjectListComponent,
    ProjectItemComponent,
    NewProjectComponent,
    InviteComponent,
  ],
  entryComponents: [
    NewProjectComponent,
    InviteComponent,
  ]
})
export class ProjectModule {
}