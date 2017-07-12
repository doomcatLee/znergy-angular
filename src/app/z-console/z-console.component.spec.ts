import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZConsoleComponent } from './z-console.component';

describe('ZConsoleComponent', () => {
  let component: ZConsoleComponent;
  let fixture: ComponentFixture<ZConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
