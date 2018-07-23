import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {cardAnim} from '../../anim/card.anim';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css'],
  animations: [cardAnim]
})
export class ProjectItemComponent implements OnInit {
  @Input() item;
  @Output() onInvite = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
  }

  onInviteClick() {
    this.onInvite.emit();
  }
}
