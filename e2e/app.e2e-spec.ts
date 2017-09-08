import { NgOpwPage } from './app.po';

describe('ng-opw App', () => {
  let page: NgOpwPage;

  beforeEach(() => {
    page = new NgOpwPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
