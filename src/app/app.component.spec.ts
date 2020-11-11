import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('Test case 1', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod([], []);
    expect(result).toEqual([]);
  });
  it('Test case 2', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod(['a', 'b'], ['a => b']);
    expect(result).toEqual(['b', 'a']);
  });
  it('Test case 3', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod(['a', 'b', 'c' , 'd'], ['a => b', 'c => d']);
    expect(result).toEqual(['b', 'a', 'd', 'c']);
  });
  it('Test case 4', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod(['a', 'b', 'c'], ['a => b', 'b => c']);
    expect(result).toEqual([ 'c', 'b', 'a']);
  });
  it('Test case 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod(['a', 'b'], []);
    expect(result).toEqual(['a', 'b']);
  });
  it('Test case 5', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const  result = app.resultMethod(['a', 'b', 'c', 'd'], ['a => b', 'b => c', 'c => a']);
    expect(result).toEqual('Error - this is a cyclic dependency');
  });
});
