import {expect} from 'chai';

const fs = require('fs');
const { JSDOM } = require("jsdom");


describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const dom = new JSDOM(index);
    expect(dom.window.document.querySelector("h1").textContent).to.equal("Hello World!");
  });
});
