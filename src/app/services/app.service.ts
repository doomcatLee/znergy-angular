import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
  private username: string;

  constructor() {
    this.username = "";
  }

  public setUsername(val: string): void {
    this.username = val;
  }

  public getUsername(): string {
    return this.username;
  }

}
