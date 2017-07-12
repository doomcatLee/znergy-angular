import { ZnergyAngularPage } from './app.po';

describe('znergy-angular App', () => {
  let page: ZnergyAngularPage;

  beforeEach(() => {
    page = new ZnergyAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
