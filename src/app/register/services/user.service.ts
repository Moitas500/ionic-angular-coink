import { Injectable } from '@angular/core';
import { Cellphone } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _cellphone?: Cellphone
  
  setCellphone(cellphone: Cellphone) {
    this._cellphone = cellphone
  }

  getCellphone() {
    return {...this._cellphone}
  }

}
