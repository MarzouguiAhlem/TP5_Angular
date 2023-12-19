// Import necessary components and services from Angular
import { Component } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

// Declare the component metadata, including its selector, template, and styles
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css'],
})
export class ActionComponent {
  // Define a newAction object to store information about a new action
  newAction: Action = {
    name: '',
    objective: '',
    responsible: { name: '', age: 0 },
    beneficiaries: 0,
    createdAt: new Date(),
    status: 'non réussi',
  };

  // Constructor function to inject the ActionService dependency
  constructor(private actionService: ActionService) {}

  // Function to add a new action
  addAction(): void {
    // Call the addAction method from the actionService and pass the newAction
    this.actionService.addAction(this.newAction);

    // Reset the newAction object to prepare for the addition of another action
    this.newAction = {
      name: '',
      objective: '',
      responsible: { name: '', age: 0 },
      beneficiaries: 0,
      createdAt: new Date(),
      status: 'non réussi',
    };
  }
}

