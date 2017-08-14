import { FullMeanAppPage } from './app.po';

describe('full-mean-app App', () => {
  let page: FullMeanAppPage;

  beforeEach(() => {
    page = new FullMeanAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
