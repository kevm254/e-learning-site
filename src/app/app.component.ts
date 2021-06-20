import {Component, OnInit} from '@angular/core';
import 'bootstrap';
import {MasterService} from '../services/master.service';
import {IGlobalState} from './state/global-state';
import {Store} from '@ngrx/store';
import {GlobalActions, TestAction} from './actions/global.actions';
import {TestSelector} from './selectors/global.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  globalActions: GlobalActions;
  blogBody: string = '';
  constructor(private service: MasterService, private store: Store<IGlobalState>) {
    this.globalActions = new GlobalActions(store);
  }
  title = 'E-Learning-Website';

  ngOnInit() {
    this.service.getBlogPosts().subscribe((data) => {
      this.blogBody = data.body;
    });

    this.store.select(TestSelector).subscribe((data) => {
      alert('my data' + data);
    });

    this.globalActions.Ui.Test('hi there');
  }
}
