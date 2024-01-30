// ADDING ITEMS TO START AND END OF LIST
// Get the <ul> element
var list = document.getElementById("list");
// ADD NEW ITEM TO END OF LIST
// Create element
var five = document.createElement("li");
// Create text node
var fiveText = document.createTextNode("apple");
// Add text node to element\
five.appendChild(fiveText);
// Add element end of list
document.getElementById("list").appendChild(five);

// ADD NEW ITEM START OF LIST
// Create element
var six = document.createElement("li");
// Create text node
var sixText = document.createTextNode("banana");
// Add text node to element
six.appendChild(sixText)
// Add element to list
document.getElementById("list").prepend(six);



// All <li> elements
var items = list.getElementsByTagName("li");
// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
var count;
// Loop through elements
for (count = 0; count < items.length; count++) {
    // Change class to cool
    items[count].classList.add("cool");
}


// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
var title = document.getElementById("title");
// h2 text
var titleText = "<h2>Buy groceries</h2>";
// No. of <li> elements
var itemCount = items.length;
// Content
var content = titleText + "<span>" + itemCount + "</span>";
// Update h2 using innerHTML (not textContent) because it contains markup
title.innerHTML = content;