import { JorgeLinharesPage } from './app.po';

describe('jorge-linhares App', () => {
  let page: JorgeLinharesPage;

  beforeEach(() => {
    page = new JorgeLinharesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
