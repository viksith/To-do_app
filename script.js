var favDialog = document.getElementById('favDialog');
var desc;
var cal;
var inputValue;
var count=0;
var todoList =[];

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";

  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    
  }
}, false);


// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  inputValue = document.getElementById("myInput").value;
  desc = document.getElementById("myDesc").value;
  cal = document.getElementById("myCal").value;
  
  
  var t = document.createTextNode("Title: " +inputValue +"    Description: "+desc +"    deadline: "+cal);
  var pending = false;
  var complete = false;
  var todo = new Todo(inputValue,desc,cal,pending,complete);

  li.appendChild(t);

  if(desc===''){
    alert("You must fill the description !");
  }

  if(cal===''){
    alert("You must select date !");
  }

  
  if (inputValue === '') {
    alert("You must fill the title !");
  } else {
    document.getElementById("myUL").appendChild(li);
    todoList.push(todo);
  }
  
  document.getElementById("myInput").value = "";
  document.getElementById("myDesc").value = "";
  document.getElementById("myCal").value = "";


  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);

  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

  class Todo {
    constructor(title,deadline,description,pending,complete) {
      this.title = title;
      this.deadline = deadline;
      this.description = description;
      this.pending=pending;
      this.complete=complete;
    }
  }
}