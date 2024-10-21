import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterContentComponent } from './footer-content.component';

describe('FooterContentComponent', () => {
  let component: FooterContentComponent;
  let fixture: ComponentFixture<FooterContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterContentComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have current year', () => {
    const currentYear = new Date().getFullYear();
    expect(component.currentYear).toBe(currentYear);
  });
});