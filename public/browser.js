console.log("FrontEnd JS is working.");

function itemtemplate(item) {
  return `<li
          class="list-group-item list-group-item-info d-flex align-itens-center justify-content-between">
          <span class="item-text"> ${item.plans} </span>
          <div>
            <button
             data-id="${item._id}" 
             class="edit-me btn btn-secondary btn-sm mr-1">
              Change
            </button>
            <button 
            data-id="${item._id}" 
            class="delete-me btn btn-danger btn-sm"> Delete </button>
          </div>
        </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (c) {
  c.preventDefault();

  // Modern post from here

  axios
    .post("/create-item", { plans: createField.value })
    .then((response) => {
      document
        .getElementById("items-list")
        .insertAdjacentHTML("beforeend", itemtemplate(response.data));
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Please, try again!");
    });
});

document.addEventListener("click", function (c) {
  // Delete operations
  // console.log(c.target);
  if (c.target.classList.contains("delete-me")) {
    if (confirm("Are you sure to delete?")) {
      axios
        .post("/delete-item", { id: c.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          c.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Please, try again1!");
        });
    }
  }

  //  Edit operations

  if (c.target.classList.contains("edite-me")) {
    alert("clicked edite button");
  }
});
