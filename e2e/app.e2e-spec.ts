import { MediumCrudPage } from './app.po';

describe('medium-crud App', () => {
  let page: MediumCrudPage;

  beforeEach(() => {
    page = new MediumCrudPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
