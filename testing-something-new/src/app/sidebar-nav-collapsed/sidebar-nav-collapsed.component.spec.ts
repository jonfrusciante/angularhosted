import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNavCollapsedComponent } from './sidebar-nav-collapsed.component';

describe('SidebarNavCollapsedComponent', () => {
  let component: SidebarNavCollapsedComponent;
  let fixture: ComponentFixture<SidebarNavCollapsedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarNavCollapsedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavCollapsedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
