import { Component, OnInit } from '@angular/core';
//Interface
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public taskList: Array<TaskList> = [];
  constructor() { }

  ngOnInit(): void {
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
}
