import { Component, Input } from '@angular/core';
import { TechnologiesLeft, TechnologiesRight } from '../data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent {

  @Input() technologiesLeft: Array<any>;
  @Input() technologiesRight: Array<any>;

}
