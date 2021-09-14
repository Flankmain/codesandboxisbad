if (document.readyState !== "loading") {
  executeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    executeCode();
  });
}

executeCode();

function executeCode() {
  const comments = document.getElementById("comments");
  const textArea = document.getElementById("textArea");

  document.getElementById("add-comment").addEventListener("click", function () {
    var newItem = document.createElement("li");
    newItem.textContent = textArea.value;
  });

  document.getElementById("add-comment").addEventListener("click", function () {
    while (comments.firstChild) {
      comments.removeChild(comments.firstChild);
    }
  });
}
