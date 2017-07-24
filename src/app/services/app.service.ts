import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private username: string;
  private email: string;

  constructor() {
    this.username = "";
    this.email = "";
  }

  public setUsername(val: string): void {
    this.username = val;
  }

  public getUsername(): string {
    return this.username;
  }

  public setEmail(val: string): void {
    this.email = val;
  }

  public getEmail(): string {
    return this.email;
  }

}
