// Import the Member interface from the member.model file
import { Member } from "./member.model";

// Define the Action interface to represent an action in the application
export interface Action {
  name: string; // Name of the action
  objective: string; // Objective of the action
  responsible: Member; // Responsible member associated with the action
  beneficiaries: number; // Number of beneficiaries for the action
  createdAt: Date; // Date when the action was created
  status: string; // Status of the action, can be "réussi" (successful) or "non réussi" (not successful)
  editing?: boolean; // Optional flag indicating if the action is currently being edited
  editingTitle?: string; // Optional field to store the title during editing for comparison
}
