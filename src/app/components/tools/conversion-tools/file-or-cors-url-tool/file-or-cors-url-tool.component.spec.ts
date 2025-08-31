import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileOrCorsUrlToolComponent } from './file-or-cors-url-tool.component';

describe('FileOrCorsUrlToolComponent', () => {
  let component: FileOrCorsUrlToolComponent;
  let fixture: ComponentFixture<FileOrCorsUrlToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileOrCorsUrlToolComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileOrCorsUrlToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
