import { Component, DoCheck } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];
  constructor() { }

  ngDoCheck(): void {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked));
  }


  public deleteItemTaskList(event: number) {
    this.taskList.slice(event,1)
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked:false })
  }
  public deleteAllTaskList(){
    const confirm = window.confirm("Você deseja realmente Deletar todos os Itens? ");

    if(confirm){
       this.taskList = [];
      }
  }
  public validationInput(event: string, index: number){
    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja realmente deletar?");

    if(confirm){
      this.deleteItemTaskList(index)
    }
    }
  }


}
