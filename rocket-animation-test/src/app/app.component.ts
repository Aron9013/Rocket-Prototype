import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public launchRocket: boolean = false;
  public launchFail: boolean = false;

  public blastoff(): void {
    this.launchRocket = true;
    this._resetAfterSuccessAnimationEnd();
  }

  public failedLaunch(): void {
    this.launchFail = true;
    this._resetAfterFailureAnimationEnd();
  }

  private _resetAfterSuccessAnimationEnd(): void {
    setTimeout(() => {
      this.launchRocket = false;
    }, 5500);
  }

  private _resetAfterFailureAnimationEnd(): void {
    setTimeout(() => {
      this.launchFail = false;
    }, 4000);
  }
}
