import { Injectable } from '@angular/core';
import { Account, Cellphone, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _cellphone?: Cellphone
  private _user?: User
  private _account?: Account

  getAccount() {
    return {...this._account}
  }
  
  getCellphone() {
    return {...this._cellphone}
  }

  getUser() {
    return { ...this._user }
  }

  setCellphone(cellphone: Cellphone) {
    this._cellphone = cellphone
  }

  setUser(user: User) {
    this._user = user
  }

  setAccount(account: Account) {
    this._account = account
  }

}
