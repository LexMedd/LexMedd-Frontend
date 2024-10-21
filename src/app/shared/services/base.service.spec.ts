import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BaseService } from './base.service';
import { environment } from '../../../environments/environment';

describe('BaseService', () => {
  let service: BaseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BaseService]
    });
    service = TestBed.inject(BaseService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items', () => {
    const mockItems = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }];
    const endpoint = 'test';

    service.getAll(endpoint).subscribe(items => {
      expect(items).toEqual(mockItems);
    });

    const req = httpMock.expectOne(`${environment.serverBasePath}/${endpoint}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItems);
  });

  it('should get item by id', () => {
    const mockItem = { id: 1, name: 'Item 1' };
    const endpoint = 'test';
    const id = 1;

    service.getById(endpoint, id).subscribe(item => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.serverBasePath}/${endpoint}/${id}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockItem);
  });

  it('should create item', () => {
    const mockItem = { name: 'New Item' };
    const endpoint = 'test';

    service.create(endpoint, mockItem).subscribe(item => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.serverBasePath}/${endpoint}`);
    expect(req.request.method).toBe('POST');
    req.flush(mockItem);
  });

  it('should update item', () => {
    const mockItem = { id: 1, name: 'Updated Item' };
    const endpoint = 'test';

    service.update(endpoint, mockItem).subscribe(item => {
      expect(item).toEqual(mockItem);
    });

    const req = httpMock.expectOne(`${environment.serverBasePath}/${endpoint}/${mockItem.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockItem);
  });

  it('should delete item', () => {
    const endpoint = 'test';
    const id = 1;

    service.delete(endpoint, id).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpMock.expectOne(`${environment.serverBasePath}/${endpoint}/${id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});
