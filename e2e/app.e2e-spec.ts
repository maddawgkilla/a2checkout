import { A2checkoutPage } from './app.po';

describe('a2checkout App', function() {
  let page: A2checkoutPage;

  beforeEach(() => {
    page = new A2checkoutPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
