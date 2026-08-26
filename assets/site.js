(function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  document.querySelectorAll("[data-quote-form]").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (name) {
        var el = form.elements.namedItem(name);
        return el && el.value ? el.value.trim() : "";
      };
      var lines = [
        "Name: " + get("name"),
        "Email: " + get("email"),
        "Lessons: " + get("lessons"),
        "",
        get("message")
      ];
      var subject = encodeURIComponent("Making Melodies Music — lesson note");
      var body = encodeURIComponent(lines.join("\n"));
      window.location.href = "mailto:makingmelodiesmusic@gmail.com?subject=" + subject + "&body=" + body;
    });
  });
})();
