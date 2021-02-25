import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyConfigDataComponent } from './copy-config-data.component';

describe('CopyConfigDataComponent', () => {
  let component: CopyConfigDataComponent;
  let fixture: ComponentFixture<CopyConfigDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyConfigDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyConfigDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
