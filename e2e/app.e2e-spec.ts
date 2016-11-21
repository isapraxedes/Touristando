import { TouristandoV1Page } from './app.po';

describe('touristando-v1 App', function() {
  let page: TouristandoV1Page;

  beforeEach(() => {
    page = new TouristandoV1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
