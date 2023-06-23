let items = ["php", "nodejs", "reactjs", "vuejs", "javascript", "laravel"];

let input = document.getElementById("search-input");

//render all items from array to ul li
function updateList() {
  let html = "";
  for (let i = 0; i < items.length; i++) {
    html += `<li>` + items[i] + `</li>`;
  }
  document.getElementById("items-list").innerHTML = html;
}

// test
// updateList();

//now add onkeyup event on input
input.onkeyup = searchItem;

function searchItem() {
  let newArray = [];
  for (let i = 0; i < items.length; i++) {
    //when user value and value in the item array matches
    if (items[i].indexOf(input.value) !== -1) {
      newArray.push(items[i]);
    }
  }
  // if not found
  if (newArray.length === 0) {
    newArray.push("Not found");
  }
  items = newArray;
  updateList();
  isEmpty();
}

// if textbox is empty then reset values

function isEmpty() {
  if (input.value === "")
    items = ["php", "nodejs", "reactjs", "vuejs", "javascript", "laravel"];
}
