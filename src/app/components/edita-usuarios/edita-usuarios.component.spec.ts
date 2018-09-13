import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaUsuariosComponent } from './edita-usuarios.component';

describe('EditaUsuariosComponent', () => {
  let component: EditaUsuariosComponent;
  let fixture: ComponentFixture<EditaUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditaUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
