const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const cases = require('../src/app.js');
const expect = chai.expect;
const assert = chai.assert;
chai.use(sinonChai);

describe('Cases from app.js', () => { // this is a testing suite made up of suites.
    
  describe('apples', () => {
    it('should be an array', () => {
      const apples = cases.apples;
      expect(apples).to.be.a('array'); // Begin here something is wrong, fix it.
    });
    it('should have a length of 4', () => {
      const applesLength = cases.apples.length;
      expect(applesLength).to.equal(4);
          // write a test to check the correct length of the apples array.
    });

    // write a test to check to see if the apples array contains 'Red Delicious'.
    it('apples should contain Red Delicious', () => {
      const applesArray = cases.apples;
      expect(applesArray).to.contain('Red Delicious');
    });
      
  });

  describe('Ben', () => {
    it('should be an object', () => {
      const Ben = cases.Ben;
      expect(Ben).to.be.an('object');
    });
    it('should contain Beasite Boys', () => {
      const benFavBand = cases.Ben.favBand;
      expect(benFavBand).to.equal('Beastie Boys');
      // write a test to check if Ben's favorite band is 'Beastie Boys'.
    });
  });

  describe('Sean', () => {
    it('should be an object', () => {
      const Sean = cases.Sean;
      expect(Sean).to.be.an('object');
    });
    it('should contain favorite food as Pizza', () => {
      const seanFavFood = cases.Sean.favFood;
      expect(seanFavFood).to.equal('Pizza');
      // write a test to check if Seans's favorite food is 'Pizza'.
    });

  });

  describe('Ryan', () => {
    it('should be an object', () => {
      const Ryan = cases.Ryan;
      expect(Ryan).to.be.an('object');
    });
    it('should not contain Harry Potter as favorite book', () => {
      const ryanFavBook = cases.Ryan.favBook;
      expect(ryanFavBook).to.not.equal('Harry Potter');
      // write a test to see if Ryan's favBook is `not` 'Harry Potter'.
    });
    
  });

  describe('Austen', () => {
    it('should be an object', () => {
      const Austen = cases.Austen;
      expect(Austen).to.be.an('object');      
    });
    it('should contain Gold as favColor', () => {
      const austenFavColor = cases.Austen.favColor;
      expect(austenFavColor).to.not.equal('Gold');
      // write a test to see if Austen's favColor is not 'Gold'.
    });
  });

  describe('Karthik', () => {
    it('should be an object', () => {
      const Karthik = cases.Karthik;
      expect(Karthik).to.be.an('object');
      expect(Karthik.favActivity).to.equal('Rock Climbing');
    });
    // write a test to check if Karthik's favActivity is 'Rock Climbing'.
  });

  describe('addNums', () => {
    it('should be a function', () => {
      const addNums = cases.addNums;
      expect(addNums).to.be.a('function');
      expect(addNums(1,2)).to.equal(3);
    });
    // write a test to check if 'addNums' returns the expected value
    it('should return expected value', () => {
      const addNums = cases.addNums;
      expect(addNums(1,2)).to.equal(3);
      // i.e. if is called addNums(1, 2); the return value should be 3.
      // write a test to check if 'addNums' returns the expected value
    });
  });

  describe('callBackInvoker', () => {
    it('should be a function', () => {
      const callBackInvoker = cases.callBackInvoker;
      expect(callBackInvoker).to.be.a('function');
    });
    it('should invoke a given callback passed to it', () => {
      // this is where you're going to be using 'chai's sinon' spy function.
      const callBack = sinon.spy();
      const newCbInvoker = cases.callBackInvoker;
      newCbInvoker(callBack);
      // pass our spy `callBack` to our newCbInvoker fn. 
      // write a test that to see if our callback has been called.
        // hint - you will need to look at https://github.com/domenic/sinon-chai to see syntax around this
    });
  });

  describe('iterator', () => {
    it('should be a function', () => {
      const iterator = cases.iterator;
      expect(iterator).to.be.a('function');
    });
    //similiar to above where we are utilizing our spy from sinon, this assertion should test if a cb is called x times.
    it('should call a callback for n times passed to cases.iterator', () => {
      const callBack = sinon.spy();
      const num = 3;
      const iterator = cases.iterator;
      iterator(num, callBack);
      expect(callBack).to.have.callCount(3);
    });
  });

});
