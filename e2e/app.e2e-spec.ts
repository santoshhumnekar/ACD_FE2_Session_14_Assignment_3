import { HttpPromiseObservableappPage } from './app.po';

describe('http-promise-observableapp App', function() {
  let page: HttpPromiseObservableappPage;

  beforeEach(() => {
    page = new HttpPromiseObservableappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
