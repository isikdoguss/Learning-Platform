const courseTable = document.getElementById("courseList");
fetch("http://localhost:5000/courses")
  .then((res) => res.json())
  .then((courses) => {
    courses.forEach((course) => {
      if (courses != null) {
        console.log(course);
        const div1 = document.createElement("div"); // col mb-5
        div1.classList.add("col", "mb-5");
        const div2 = document.createElement("div"); // card h-100
        div2.classList.add("card", "h-100");
        const img = document.createElement("img"); // card-img-top
        img.classList.add("card-img-top");
        const src = img.setAttribute("src", `${course.path}`);
        const div3 = document.createElement("div"); //card-body p-4
        div3.classList.add("card-body", "p-4");
        const div4 = document.createElement("div"); //text-center
        div4.classList.add("text-center");
        const h5 = document.createElement("h5");
        h5.classList.add("fw-bolder");
        h5.textContent = course.name;
        const span = document.createElement("span");
        span.classList.add("mr-2");
        span.textContent =
          course.Users[0].firstName + " " + course.Users[0].lastName;
        const span2 = document.createElement("span");
        const em = document.createElement("em");
        const strong = document.createElement("strong");
        strong.textContent = "$" + course.price;
        const div5 = document.createElement("div");
        div5.classList.add("mt-3");
        em2 = document.createElement("em");
        em2.textContent = course.description;
        const div6 = document.createElement("div");
        div6.classList.add(
          "card-footer",
          "mt-1",
          "mx-auto",
          "p-4",
          "pt-0",
          "border-top-0",
          "bg-transparent"
        );
        const span3 = document.createElement("span");
        span3.classList.add("text-center");
        const a = document.createElement("a");
        a.classList.add("btn", "btn-outline-dark", "mt-auto", "mr-1");
        a.textContent = "See Details";
        const span4 = document.createElement("span");
        span4.classList.add("text-center");
        const a2 = document.createElement("a");
        a2.classList.add("btn", "btn-outline-dark", "mt-auto");
        a2.textContent = "Add to Cart";

        span4.appendChild(a2);
        span3.appendChild(a);
        div6.appendChild(span3);
        div6.appendChild(span4);

        div5.appendChild(em2);
        em.appendChild(strong);

        span2.appendChild(em);
        div4.appendChild(h5);

        div4.appendChild(span);
        div4.appendChild(span2);

        div4.appendChild(div5);

        div3.appendChild(div4);

        div2.appendChild(img);
        div2.appendChild(div3);
        div2.appendChild(div6);

        div1.appendChild(div2);

        courseTable.appendChild(div1);
      }
    });
  });
