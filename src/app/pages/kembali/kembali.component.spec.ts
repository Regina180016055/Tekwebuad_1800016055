import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KembaliComponent } from './kembali.component';

describe('KembaliComponent', () => {
  let component: KembaliComponent;
  let fixture: ComponentFixture<KembaliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KembaliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KembaliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
