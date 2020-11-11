import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'espire';
  result = [];


  resultMethod(tasks: Array<any> = [], dependencies: any[] = []) {
    if (tasks.length < 2 && dependencies.length === 0) {
      return this.result;
    } else if (tasks.length >= 2 && dependencies.length >= 1) {
      for (let i = 0; i < dependencies.length; i++) {
        if (!!dependencies[i]) {
          let arr = dependencies[i].split('=>');
          arr = arr.map(res => res.trim());
          for (let j = 0; j < arr.length; j++) {
            if (tasks.includes(arr[j])) {
              if (this.result.length <= 1) {
                this.result.unshift(arr[j]);
              } else {
                if (this.result.includes(arr[j]) && !this.result.includes(arr[j + 1])) {
                  this.result.unshift(arr[j + 1]);
                  break;
                }
                else if (!this.result.includes(arr[j]) && this.result.includes(arr[j + 1])) {
                  this.result.unshift(arr[j]);
                  break;
                }
                else if (this.result.includes(arr[j]) && this.result.includes(arr[j + 1])) {
                  return 'Error - this is a cyclic dependency';
                  break;
                }
                else if (!(this.result.includes(arr[j]) && this.result.includes(arr[j + 1]))) {
                  const reversedArray = arr.reverse();
                  this.result.push(...reversedArray);
                  break;
                }
                else {
                  this.result.unshift(arr[j]);
                }
              }
            }
          }
        }
      }
      return this.result;
    }
    else if (tasks.length >= 2 && dependencies.length < 1) {
      return tasks;
    }
  }
}

