// spec.js
describe('Protractor exercise', function() {
  var nav = element(by.css('.nav'));
  var navOptions = element.all(by.css('.nav-option'));
  var well = element(by.css('.well'));
  

  beforeEach(function() {
    browser.get('http://localhost:8080/');
  });

  it('should have a title', function(){
    expect(browser.getTitle()).toEqual('Icelandic Concerts');
  });

  it('should have a nav', function() {
    expect(nav.isPresent()).toBe(true)
  });

  it('should have 3 nav options', function(){
    expect(navOptions.count()).toBe(3);
  });

  it('should have a well separating elements', function(){
    expect(well.isPresent()).toBe(true);
  });

  it('has the first option named "Concerts', function(){

    expect(navOptions.first().getText()).toBe('Concerts');
  });


});
