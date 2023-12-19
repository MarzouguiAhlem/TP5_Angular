// Import necessary modules and components from Angular core
import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';
import { Action } from '../../models/action.model';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-action-list', // Selector for using the component in templates
  templateUrl: './action-list.component.html', // Template file for the component
  styleUrls: ['./action-list.component.css'], // Stylesheet file for the component
})
export class ActionListComponent implements OnInit {
  actions: Action[] = []; // Array to store the list of actions
  newAction: Action = { // Object to store details of a new action
    name: '',
    objective: '',
    responsible: { name: '', age: 0 },
    beneficiaries: 0,
    status: 'non réussi',
    createdAt: new Date(),
  };
  selectedStatus: string = 'toutes'; // Variable to store the selected status filter
  searchTerm: string = ''; // Variable to store the search term

  // OnInit lifecycle hook to perform initialization logic when the component is created
  ngOnInit(): void {
    this.actions = this.actionService.getActions(); // Retrieve actions from the action service
  }

  // Constructor to inject the ActionService dependency
  constructor(private actionService: ActionService) {
    this.actions = this.actionService.getActions(); // Retrieve actions from the action service
  }

  // Method to start editing the title of an action
  startEditing(action: Action): void {
    action.editing = true; // Set the editing flag to true
    action.editingTitle = action.name; // Store the current title for potential rollback
  }

  // Method to stop editing the title of an action
  stopEditing(action: Action): void {
    action.editing = false; // Set the editing flag to false
    if (action.editingTitle) {
      action.name = action.editingTitle; // Set the action name to the edited title
      this.actionService.updateAction(action); // Update the action title in the service
    }
  }

  // Getter to filter actions based on status and search term
  get filteredActions(): Action[] {
    let filteredByStatus = this.actions;
    
    // Filter by status if a specific status is selected
    if (this.selectedStatus !== 'toutes') {
      filteredByStatus = this.actions.filter(action => action.status === this.selectedStatus);
    }
  
    // Return either the filtered actions or the actions based on the search term
    return this.searchTerm.trim() === '' ? filteredByStatus : this.searchActions();
  }

  // Method to filter actions based on the search term
  searchActions(): Action[] {
    return this.actions.filter(action =>
      action.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  // Method to delete an action
  deleteAction(action: Action): void {
    const index = this.actions.indexOf(action);
    if (index !== -1) {
      this.actionService.deleteAction(index); // Delete the action from the service
    }
  }

  // Method to mark an action as successful
  markAsSuccess(action: Action): void {
    const index = this.actions.indexOf(action);
    if (index !== -1) {
      const updatedAction: Action = { ...action, status: 'réussi' };
      this.actionService.markAsSuccess(index, updatedAction); // Update the action status in the service
    }
  }
  
  // Method to add a new action
  addAction(): void {
    this.actionService.addAction(this.newAction); // Add the new action to the service
    this.resetForm(); // Reset the form after adding
  }

  // Private method to reset the form values
  private resetForm(): void {
    this.newAction = {
      name: '',
      objective: '',
      responsible: { name: '', age: 0 },
      beneficiaries: 0,
      status: 'non réussi',
      createdAt: new Date(),
    };
  }
}



