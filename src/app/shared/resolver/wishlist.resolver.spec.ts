import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { wishlistResolver } from './wishlist.resolver';

describe('wishlistResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => wishlistResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
