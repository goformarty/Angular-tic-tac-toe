import { Component, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent {

  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = !this.isActive;
  }

}
