import { QDTTreeViewPage } from './app.po';

describe('qdt-tree-view App', function() {
  let page: QDTTreeViewPage;

  beforeEach(() => {
    page = new QDTTreeViewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
