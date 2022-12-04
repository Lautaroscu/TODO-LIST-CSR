import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListAppComponent } from './todo-list-app.component';

describe('TodoListAppComponent', () => {
  let component: TodoListAppComponent;
  let fixture: ComponentFixture<TodoListAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
