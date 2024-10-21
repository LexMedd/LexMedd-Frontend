import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditProfileComponent } from './edit-profile.component';
import { BaseService } from '../../../shared/services/base.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { User } from '../../../user/model/user.entity';
import { FormsModule } from '@angular/forms';

describe('EditProfileComponent', () => {
  let component: EditProfileComponent;
  let fixture: ComponentFixture<EditProfileComponent>;
  let userServiceSpy: jasmine.SpyObj<BaseService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const userSpy = jasmine.createSpyObj('UserService', ['getCurrentUser', 'updateUser']);
    const routerSpyObj = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      declarations: [ EditProfileComponent ],
      imports: [ FormsModule ],
      providers: [
        { provide: BaseService, useValue: userSpy },
        { provide: Router, useValue: routerSpyObj }
      ]
    }).compileComponents();

    userServiceSpy = TestBed.inject(BaseService) as jasmine.SpyObj<BaseService>;
    routerSpy = TestBed.inject(Router) as jasmine.SpyObj<Router>;
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfileComponent);
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

    userServiceSpy.getCurrentUser.and.returnValue(of(testUser));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user profile on init', () => {
    expect(userServiceSpy.getCurrentUser).toHaveBeenCalled();
    expect(component.user.name).toBe('Test User');
  });

  it('should update user profile when save changes is called', () => {
    const updatedUser: User = { ...component.user, name: 'Updated Name' };
    userServiceSpy.update.and.returnValue(of(updatedUser));

    component.user.name = 'Updated Name';
    component.saveChanges();

    expect(userServiceSpy.update).toHaveBeenCalledWith('users', updatedUser);
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/profile']);
  });

  it('should navigate to profile when cancel changes is called', () => {
    component.cancelChanges();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/profile']);
  });

  it('should update fileName when file is selected', () => {
    const mockFile = new File([''], 'test.jpg', { type: 'image/jpeg' });
    const mockEvent = { currentTarget: { files: [mockFile] } } as unknown as Event;

    component.onFileSelected(mockEvent);
    expect(component.fileName).toBe('test.jpg');
  });
});
