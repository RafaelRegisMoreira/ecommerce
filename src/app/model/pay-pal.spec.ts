import { PayPal } from './pay-pal';

describe('PayPal', () => {
  it('should create an instance', () => {
    expect(new PayPal()).toBeTruthy();
  });
});
