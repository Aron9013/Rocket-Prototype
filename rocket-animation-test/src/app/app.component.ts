import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public launchRocket: boolean = false;

  public blastoff(): void {
    this.launchRocket = true;
  }
}
