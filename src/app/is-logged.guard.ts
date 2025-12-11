import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, CanActivate } from "@angular/router";
import { map, Observable } from "rxjs";
import { UserService } from "./user.service";

@Injectable({
    providedIn: 'root'
})
export class isLoggedGuardService implements CanActivate {

    constructor(private _userService: UserService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this._userService.isUserLogged.pipe(
            map((isLogged) => {
                return !!isLogged;
            })
        );
    }
}

export const isLoggedGuardFn: CanActivateFn = (route, state) => {
    return inject(UserService).isUserLogged;
};