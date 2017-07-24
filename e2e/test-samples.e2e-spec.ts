/**
 * Created by yishai on 11/07/2017.
 */

import { AngularTodolistEndToEndPage } from "./app.po";
import { browser, by, element } from "protractor";

// import { browser, element, by } from 'protractor/globals';

describe('angular-todolist-end-to-end App', () => {
  let page : AngularTodolistEndToEndPage;

  beforeEach(() => {
    page = new AngularTodolistEndToEndPage();
  });

  it('should do something...', () => {

    browser.get('/');

    setTimeout(() => {
      browser.get('/2');
    }, 3000)

    // expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });


  it('should find green element', () => {

    browser.get('/');

    let greenParagraph = element(by.css('p.green'));
    // console.log(greenParagraph);
    let text = greenParagraph.getText();

    console.log(text);

    expect(text).toEqual('green paragraph');
   });


  /*
it('should find yellow elements', () => {

    browser.get('/');

    let greenParagraph = element(by.css('p.green'));
    // console.log(greenParagraph);
    let text = greenParagraph.getText();

    console.log(text);

    expect(text).toEqual('green paragraph');


    // expect(page.getParagraphText()).toEqual('Welcome to app!!');
    // let greenParagraphs = element.all(by.css('p.green'));
    //
    // let greenParagraph = element(by.css('p.green'));
    // let text = greenParagraph.getText();

    // let blueParagraphsList = elements.all(by("p.blue"));
    // let count = blueParagraphsList.count();

  });
*/

});




