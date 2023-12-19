// Import necessary modules and components from Angular core
import { Component, OnInit } from '@angular/core';
import { ActionService } from '../../services/action.service';

// Component decorator to define metadata for the component
@Component({
  selector: 'app-statistics', // Selector for using the component in templates
  templateUrl: './statistics.component.html', // Template file for the component
  styleUrls: ['./statistics.component.css'], // Stylesheet file for the component
})
export class StatisticsComponent implements OnInit {
  statisticsData: any[] = []; // Array to store statistical data

  constructor(private actionService: ActionService) {}

  ngOnInit(): void {
    // Retrieve actions from the action service
    const actions = this.actionService.getActions();

    // Example: Generate statistics based on actions
    this.statisticsData = actions.map(action => ({
      label: action.name,
      value: action.beneficiaries, // For example, use the number of beneficiaries as the value
    }));
  }

  // Method to calculate fill percentage based on a value and a maximum value
  calculateFillPercentage(value: number): string {
    const maxValue = 200; // Set your desired max value
    return (value / maxValue) * 100 + '%';
  }
}


