import { Component } from '@angular/core';
import { concatArray } from 'ng-project-helper';

class SimpleItem {
  constructor(public id: number, public label: string) {
  }
}

const SimpleList: SimpleItem[] = [
  new SimpleItem(1, '123123'),
  new SimpleItem(2, 'b'),
  new SimpleItem(3, 'c'),
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor() {
    console.log(concatArray(SimpleList, 'id', new SimpleItem(1, 'a')));
  }

}
