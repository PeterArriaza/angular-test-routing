import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadCopyHistoryComponent } from './upload-copy-history.component';

describe('UploadCopyHistoryComponent', () => {
  let component: UploadCopyHistoryComponent;
  let fixture: ComponentFixture<UploadCopyHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadCopyHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadCopyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
