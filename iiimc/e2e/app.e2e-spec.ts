import { IiimcPage } from './app.po';

describe('iiimc App', () => {
  let page: IiimcPage;

  beforeEach(() => {
    page = new IiimcPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
