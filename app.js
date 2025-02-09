let input = document.querySelector("input");
let button = document.querySelector("button");
let ul = document.querySelector("ul");

button.addEventListener("click", function () {
    /// TASK ADD INTO LIST 
    if (input.value.trim() !== "") {  
        let li = document.createElement("li");
        li.textContent = input.value;
        
        /// Create Delete Button
        let delBtn = document.createElement("button");
        let img = document.createElement("img");
        img.src = "delete.png"; 
        img.alt = "Delete";
        delBtn.appendChild(img);
        delBtn.classList.add("delete");

        /// Add button to list item
        li.prepend(delBtn);

        /// Add item to the beginning of the list
        ul.prepend(li); 

        /// Clear input field
        input.value = "";
    }
});

/// DELETE TASK WHEN CLICKED ON DELETE BUTTON
ul.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON" || event.target.tagName === "IMG") {
        let listItem = event.target.closest("li");  
        if (listItem) {
            listItem.remove();
        }
    }
});
