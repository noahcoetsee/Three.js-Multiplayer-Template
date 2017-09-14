/**
 * @file UI Code that interacts with index.html, and ui.css
 * @author TheCodeCrafter <noahcoder77@gmail.com>
 */
 
var UI = function() {
  this.init = function() {
    
  }
  
  this.update = function(element, value) {
    try {
      $(element).html(value);
    } catch {
      throw 'Unknown element, or un-parsable value';
    }
  }
}
