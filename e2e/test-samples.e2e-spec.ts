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

    let text = greenParagraph.getText();

    // console.log(greenParagraph);
    // debugger;
    // console.log(text);

    expect(text).toEqual('green paragraph');
  });

  it('should find yellow element from few elements', () => {

    browser.get('/');

    let yellowParagraph = element(by.css('p.yellow'));

    let text = yellowParagraph.getText();

    expect(text).toEqual('yellow paragraph 1');
  });


  it('should find yellow elements - all', () => {

    browser.get('/');

    let yellowParagraphs = element.all(by.css('p.yellow'));

    expect(yellowParagraphs.count()).toEqual(3);
  });

//


  //
  // // let text           = yellowParagraphs[1].getText();
  // //
  // // console.log(text);
  //
  // // expect(text).toEqual('green paragraph 2');
  //
  //
  // // expect(page.getParagraphText()).toEqual('Welcome to app!!');
  // // let greenParagraphs = element.all(by.css('p.green'));
  // //
  // // let yellowParagraphs = element(by.css('p.green'));
  // // let text = yellowParagraphs.getText();
  //
  // // let blueParagraphsList = elements.all(by("p.blue"));
  // // let count = blueParagraphsList.count();
  //
  //
  //
  // // browser.pause();
  // // debugger;
  // //     browser.debugger();
  // console.log('aaa');
  // console.log(yellowParagraphs.count());

  /*
      try {
        console.log(yellowParagraphs[ 0 ]);
        expect(yellowParagraphs[ 0 ].getText()).toEqual('Welcome to app!!');
      }
      catch (e) {
        console.log('err', e);
      }

      console.log('zzz');
  */


});




