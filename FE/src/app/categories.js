// export const fetchCategories = () => {
const dataTable = document.getElementById("categoryList");
if (dataTable != null) {
  fetch("http://localhost:5000/categories/parentCategories")
    .then((res) => res.json())
    .then((categories) => {
      categories.forEach((category) => {
        if (categories != null) {
          const li = document.createElement("li");
          const a = document.createElement("a");
          a.textContent = category.name;
          a.className = "dropdown-item";
          // a.href = "#";
          li.appendChild(a);
          fetch(
            `http://localhost:5000/categories/categoryChilds/${category.id}`
          )
            .then((res) => res.json())
            .then((subCategories) => {
              subCategories.forEach((subCategory) => {
                if (subCategories != null) {
                  var ul = document.createElement("ul");

                  const subli = document.createElement("li");
                  const a = document.createElement("a");
                  a.textContent = subCategory.name;
                  a.className = "dropdown-item";
                  a.href = "#";
                  //TODO Tıklanan subcategorye göre courselar getirilecek.
                  subli.appendChild(a);
                  ul.appendChild(subli);
                  li.appendChild(ul);
                }
              });
            });
          // li.addEventListener("click", function () {
          //   ul.classList.toggle("hidden");
          // });

          dataTable.appendChild(li);
        }
      });
    });
}
// };

document.addEventListener("DOMContentLoaded", function () {
  // make it as accordion for smaller screens
  if (window.innerWidth < 992) {
    // close all inner dropdowns when parent is closed
    document
      .querySelectorAll(".navbar .dropdown")
      .forEach(function (everydropdown) {
        everydropdown.addEventListener("hidden.bs.dropdown", function () {
          // after dropdown is hidden, then find all submenus
          this.querySelectorAll(".submenu").forEach(function (everysubmenu) {
            // hide every submenu as well
            everysubmenu.style.display = "none";
          });
        });
      });

    document.querySelectorAll(".dropdown-menu a").forEach(function (element) {
      element.addEventListener("click", function (e) {
        let nextEl = this.nextElementSibling;
        if (nextEl && nextEl.classList.contains("submenu")) {
          // prevent opening link if link needs to open dropdown
          e.preventDefault();
          if (nextEl.style.display == "block") {
            nextEl.style.display = "none";
          } else {
            nextEl.style.display = "block";
          }
        }
      });
    });
  }
  // end if innerWidth
});
