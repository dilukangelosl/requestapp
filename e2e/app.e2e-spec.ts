import { ShaheedPage } from './app.po';

describe('shaheed App', () => {
  let page: ShaheedPage;

  beforeEach(() => {
    page = new ShaheedPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
