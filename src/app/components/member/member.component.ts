// Import necessary modules and components from Angular core
import { Component, Input } from '@angular/core';
import { Member } from '../../models/member.model';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-member', // Selector for using the component in templates
  templateUrl: './member.component.html', // Template file for the component
  styleUrls: ['./member.component.css'], // Stylesheet file for the component
})
export class MemberComponent {
  @Input() member: Member | undefined;
}
