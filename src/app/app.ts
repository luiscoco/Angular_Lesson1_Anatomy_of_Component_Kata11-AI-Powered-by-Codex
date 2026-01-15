import { Component, signal } from '@angular/core';
import { DashboardComponent, WidgetData } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  imports: [DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Tree Thinking');
  protected readonly widgets: ReadonlyArray<WidgetData> = [
    { id: 1, name: 'Latency', value: '120ms', note: 'Within SLA' },
    { id: 2, name: 'Errors', value: '0.2%', note: 'Below threshold' },
    { id: 3, name: 'Users Online', value: '1,284', note: 'Peak hour' }
  ];
}
