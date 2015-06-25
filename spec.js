// spec.js
describe('Protractor exercise', function() {
  var nav = element(by.css('.nav'));
  var navOptions = element.all(by.css('.nav-option'));

  beforeEach(function() {
    browser.get('http://localhost:8080/');
  });

  it('should have a nav', function() {
    expect(nav.isPresent()).toBe(true)
  });

  it('should have 3 nav options', function(){
    expect(navOptions.count()).toBe(3);
  });

  it('should have a final option that says "Messages"', function(){
    expect(navOptions.last().getText()).toContain('Messages');
  })
});
