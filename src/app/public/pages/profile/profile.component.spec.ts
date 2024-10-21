import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileComponent } from './profile.component';
import { BaseService } from '../../../shared/services/base.service';
import { of } from 'rxjs';
import { User } from '../../../user/model/user.entity';
import { FormsModule } from '@angular/forms';

describe('ProfileComponent', () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;
  let baseServiceSpy: jasmine.SpyObj<BaseService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('BaseService', ['getCurrentUser', 'update']);

    await TestBed.configureTestingModule({
      declarations: [ ProfileComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: BaseService, useValue: spy }
      ]
    }).compileComponents();

    baseServiceSpy = TestBed.inject(BaseService) as jasmine.SpyObj<BaseService>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;

    const testUser: User = {
      id: 1,
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
      userType: 'lawyer',
      subscription: 'Premium',
      urlToImage: '/assets/img/User.png'
    };

    baseServiceSpy.getCurrentUser.and.returnValue(of(testUser));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user profile on init', () => {
    expect(baseServiceSpy.getCurrentUser).toHaveBeenCalled();
    expect(component.user.name).toBe('Test User');
  });

  it('should update user profile when save changes is called', () => {
    const updatedUser: User = { ...component.user, name: 'Updated Name' };
    baseServiceSpy.update.and.returnValue(of(updatedUser));

    component.user.name = 'Updated Name';
    component.saveChanges();

    expect(baseServiceSpy.update).toHaveBeenCalledWith('users', updatedUser);
    expect(component.user.name).toBe('Updated Name');
  });

  it('should toggle edit mode', () => {
    expect(component.isEditMode).toBeFalse();
    component.toggleEditMode();
    expect(component.isEditMode).toBeTrue();
    component.toggleEditMode();
    expect(component.isEditMode).toBeFalse();
  });

  it('should determine if user is a lawyer', () => {
    expect(component.isLawyer()).toBeTrue();
    component.user.userType = 'doctor';
    expect(component.isLawyer()).toBeFalse();
  });

  it('should determine if user is a doctor', () => {
    expect(component.isDoctor()).toBeFalse();
    component.user.userType = 'doctor';
    expect(component.isDoctor()).toBeTrue();
  });
});
