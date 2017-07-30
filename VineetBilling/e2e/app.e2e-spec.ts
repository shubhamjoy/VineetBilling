import { VineetBillingPage } from './app.po';

describe('vineet-billing App', () => {
  let page: VineetBillingPage;

  beforeEach(() => {
    page = new VineetBillingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
