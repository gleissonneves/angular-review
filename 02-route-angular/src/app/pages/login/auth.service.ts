import { Injectable } from '@angular/core';
import { Armazenamento } from 'src/app/shared/util/Armazenamento';
import { Auth, AuthState, User } from './auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public stored = new Armazenamento();

  public loginAccepts: User[] = [
    {
      user: 'root@aluno.com',
      pass: 'root-123',
      vision: 'aluno',
    },
    {
      user: 'root@professor.com',
      pass: 'root-123',
      vision: 'professor',
    },
    {
      user: 'root@admin.com',
      pass: 'root-123',
      vision: 'admin',
    }
  ]

  constructor() {}

  private _findByUser(user: string, pass: string): User {
    const userInformation = this.loginAccepts.find((login) => login.user === user && login.pass === pass)
    return userInformation || { user: '', pass: '', vision: '' }
  }

  private _recoveryUser(login: Auth): AuthState {
    const user = this._findByUser(login.user, login.pass);
    return user.user ? { ...user, userExist: true }: { ...user, userExist: false };
  }

  public userExist(login: Auth) {
    const authentication = this._recoveryUser(login);
    
    if(authentication.userExist) {
      this.stored.setItem({ key: 'user', value: authentication }, true)
    }

    return authentication.userExist;
  }
}
