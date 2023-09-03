import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
   list:any[]=[];
  addNewTask(Task:any){
    this.list.push({id:this.list.length,name:Task});
    console.warn(this.list);
  }
  OnRemove(id:number){
    this.list=this.list.filter(task=>task.id!==id);
  }
  RemoveAllTask(){
    this.list=[];
  }
}
