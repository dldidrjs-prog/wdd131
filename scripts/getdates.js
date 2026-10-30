//  const = creating a box storing a value
// today is a name of variable that stores the value
// new Date() is a built-in fuction that creates a value of the current date and time
const today = new Date();

// year is a name of variable that stores the value
// .getFullYear() is a built-in function that gets the year of the today(current date) 
const year = today.getFullYear();

// document is a built-in object that represents the HTML document(whole page)
// = << is not meaning same. meaning put the value of the right side into the left side
// .getElementById() is a built-in function that gets the element of the HTML document by its Id.
// (in this case, currentyear in the index.html) 
// so, it will find the <span id="currentyear"></span>

// .textContent is meaning the text inside the element
// (in this case, the text inside the <span id="currentyear"></span>
//  will be replaced by the value of the year variable)
// year is a variable that stored the value of the current year.(line 8)
document.getElementById("currentyear").textContent = year;

// textContent = whem isserting plan text into an element.
// after .textContent, strings can be inserted into the element and + document.lastModified etc.
// document.lastModified is a built-in property that gets the last modified date and time.
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;