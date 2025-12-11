import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanLeaveComponent {
  canLeave: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LeaveGuard implements CanDeactivate<CanLeaveComponent> {

  canDeactivate(
    component: CanLeaveComponent
  ): boolean | Observable<boolean> {

    if (!component.canLeave) {
      alert("You can't leave the page - disabled");
      return false;
    }

    return true;
  }
}
