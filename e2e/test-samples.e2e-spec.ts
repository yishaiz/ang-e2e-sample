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

  // this group of test is in comment due to conflict

  /*

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


  it('get button - will fail', () => {

    browser.get('/');

    // let todosBefore = element.all(by.css('a.todo'));
    let todosBefore = element.all(by.css('a'));

    expect(todosBefore.count()).toEqual(3);

    let submitButton = element.all(by.css('input'));

    expect(submitButton.count()).toEqual(2);
  });

  it('should use click event - test controls ', () => {

    browser.get('/');

    setTimeout(() => {
      let todosBefore = element.all(by.css('a.todo'));
      expect(todosBefore.count()).toEqual(3);

      let button = element.all(by.css('input'));
      expect(button.count()).toEqual(2);

      let submitButton = element.all(by.css('input[type="submit"]'));
      expect(submitButton.count()).toEqual(1);

      // input type="submit"
    }, 800)


    //trigger click - no text

    //trigger click - new todo

  });




  it('should use click event', () => {

    browser.get('/');

    setTimeout(() => {

      let button = element.all(by.css('input'));
      expect(button.count()).toEqual(2);


      let textBox = element.all(by.css('input[type="text"]'));
      expect(textBox.count()).toEqual(1);

      // let todo1 = element.all(by.css('a[text="Todo 1"]'));
      let todo1 = element.all(by.linkText('Todo 1'));
      expect(todo1.count()).toEqual(1);

      let todo0 = element.all(by.linkText('Todo 21'));
      expect(todo0.count()).toEqual(0);

      let submitButton = element.all(by.css('input[type="submit"]'));
      expect(submitButton.count()).toEqual(1);

      let todos = element.all(by.css('a.todo'));
      expect(todos.count()).toEqual(3);

      //trigger click - no text

      submitButton.click();
      expect(todos.count()).toEqual(3);

      //trigger click - new todo

      textBox.sendKeys("Todo 444");
      submitButton.click();

      expect(todos.count()).toEqual(4);

      let todo4 = element.all(by.linkText('Todo 444'));
      expect(todo4.count()).toEqual(1);

    }, 800)





  });
*/


  it("should be able to click on a todo and get the details page", () => {

    browser.get("/");

    let firstTodo     = element.all(by.css(".todos .todo")).first();
    let firstTodoText = firstTodo.getText();

    firstTodo.click();

    let inputFieldText = element(by.css("todo input[type=text]"))
      .getAttribute("value");

    expect(inputFieldText).toEqual(firstTodoText);
  })

  /*

    it('should use click event - test controls ', () => {
      browser.manage().timeouts().pageLoadTimeout(3000);  // 10 seconds
      browser.get('/');

      browser.sleep(1000).then(()=>{
        let todosBefore = element.all(by.css('a.todo'));

        expect(todosBefore.count()).toEqual(3);

        let submitButton = element.all(by.css('input'));

        expect(todosBefore.count()).toEqual(2);

      });
      // setTimeout(() => {
        // input type="submit"
      // }, 1000)


      //trigger click - no text

      //trigger click - new todo


    });
  */


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




