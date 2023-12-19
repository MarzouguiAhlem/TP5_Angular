import { Injectable } from '@angular/core';
import { Action } from '../models/action.model';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actions: Action[] = [];

  // Get the list of actions
  getActions(): Action[] {
    return this.actions;
  }

  // Add a new action to the list
  addAction(action: Action): void {
    this.actions.push(action);
  }

  // Delete an action from the list based on the index
  deleteAction(index: number): void {
    this.actions.splice(index, 1);
  }

  // Mark an action as successful based on the index and the updated action
  markAsSuccess(index: number, updatedAction: Action): void {
    // Your logic to update the action at the specified index with the updatedAction
    this.actions[index] = updatedAction;
  }

  // Update an action in the list
  updateAction(updatedAction: Action): void {
    // Find the index of the action to be updated
    const index = this.actions.findIndex(action => action === updatedAction);
    if (index !== -1) {
      // Update the name of the action
      this.actions[index].name = updatedAction.name;
    }
  }
}


