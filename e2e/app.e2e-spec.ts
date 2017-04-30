import { ENRJSMPage } from './app.po';

describe('enrjsm App', () => {
  let page: ENRJSMPage;

  beforeEach(() => {
    page = new ENRJSMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
