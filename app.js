// initialization of form and other things

let yearContainer = document.querySelector(".date");

yearContainer.innerHTML = new Date().getFullYear();

let form = document.querySelector(".submitInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let resultBox = document.getElementById("resultBox");
  if (resultBox) {
    resultBox.remove();
  }

  calculateCartesian(form.elements["set1"].value, form.elements["set2"].value);

  form.elements["set1"].value = "";
  form.elements["set2"].value = "";
});

// calculating cartesian product

function calculateCartesian(set1Value, set2Value) {
  let set1 = set1Value.split(",");
  let set2 = set2Value.split(",");

  console.log(set1, set2);

  let result = [];

  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      result.push([set1[i], set2[j]]);
    }
  }

  displayResult(
    JSON.stringify(result).replace(/\[/g, "{").replace(/]/g, "}"),
    set1.length,
    set2.length
  );
}

function displayResult(cartesianProduct, set1Length, set2Length) {
  let box = document.querySelector(".box");
  let totalSets = set1Length * set2Length;

  let outPutBox = document.createElement("div");
  outPutBox.setAttribute("id", "resultBox");

  outPutBox.innerHTML = `<h2>Result:<h2><div class="result">The Total number of sets in set1 &#x2717; set2 is: ${totalSets}</div>
  <div class="resultantSet">Here is your Product -: <br> ${cartesianProduct}</div>`;

  box.append(outPutBox);
}
