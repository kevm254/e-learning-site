import {Component, Input} from '@angular/core';

@Component({
  selector: 'card-cmp',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{
  @Input()
  imgUrl: string = '';
  @Input()
  title: string = '';
  @Input()
  text: string = '';

}
