import {EventEmitter , Injectable} from '@angular/core';
import { from, Subject } from 'rxjs';
@Injectable({providedIn: 'root'})
export class UserService{
    activatedEmitter = new Subject<>(boolean);
}