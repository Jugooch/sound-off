import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: 'goals.page.html',
  styleUrls: ['goals.page.scss']
})
export class GoalsPage {

  progress: number;
  constructor() {
    this.progress = 0;
  }

  setProgress(){
    
  }
}
