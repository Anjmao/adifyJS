import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/take'

import { UserService } from '../shared';

@Injectable()
export class NoAuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private userService: UserService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {

        return this.userService.isAuthenticated.take(1).map(bool => !bool);
    }
}