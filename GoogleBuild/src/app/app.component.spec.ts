import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs/internal/observable/of';
import { AppComponent } from './app.component';
import { TodoService } from './services/todo.service';
import { TodoComponent } from './todo/todo.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => { //Naam van de test
    const fixture = TestBed.createComponent(AppComponent); // Mock component maken van het orgineel
    const app = fixture.componentInstance; //
    expect(app).toBeTruthy(); //Conditions
  });

  it(`should have as title 'Google_Build'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Google_Build');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('Google_Build app is running!');
  });
});

