import * as angular from 'angular';
import { provide } from 'ng-metadata/core';

import {TabsModule} from './components/tabs/index'

import { TodoAppCmp } from './components/todo-app.component';
import { TodoItemCmp } from './components/todo-item.component';
import { AddTodoCmp } from './components/add-todo.component';

import { RemainingTodosPipe } from './pipes/remainingTodos.pipe';

import { TodoStore } from './stores/todoStore.service';

import { ElementReadyDirective } from './directives/element-ready.directive';

export const AppModule = angular.module( 'app', [TabsModule] )

  .directive( ...provide( TodoAppCmp ) )
  .directive( ...provide( AddTodoCmp ) )
  .directive( ...provide( TodoItemCmp ) )
  .filter( ...provide( RemainingTodosPipe ) )
  .service( ...provide( TodoStore ) )
  .directive( ...provide( ElementReadyDirective ) )

  ;
