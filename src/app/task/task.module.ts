import { NgModule } from '@angular/core';
import { TaskListComponent } from './task-list';
import { TaskItemComponent } from './task-item';
import { TaskHeaderComponent } from './task-header';
import { TaskHomeComponent } from './task-home';
import { TaskRoutingModule } from './task-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewTaskComponent } from './new-task/new-task.component';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskHomeComponent,
    TaskItemComponent,
    TaskHeaderComponent,
    NewTaskComponent
  ],
  imports: [
    SharedModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
