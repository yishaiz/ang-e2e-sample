import { AngularTodolistEndToEndPage } from './app.po';

describe('angular-todolist-end-to-end App', () => {
  let page: AngularTodolistEndToEndPage;

  beforeEach(() => {
    page = new AngularTodolistEndToEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
