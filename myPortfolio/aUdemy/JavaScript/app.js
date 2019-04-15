const name = "William";
const job = "Web Developer";
const age = "31";
const city = "Lubbock";

let html;

//Without template strings (es5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  "</li><li>City: " +
  city +
  "</li></ul>";

html = "<ul>" + "<li>Name: " + name + "</li>";
"<li>Age: " + age + "</li>";
"<li>Job: " + job + "</li>";
"<li>City: " + city + "</li>" + "</ul>";

function hello() {
  return "Hello";
}

//With template strings
html = `
<ul>
<li>Name: ${name}</li>
<li>Age: ${age}</li>
<li>Job: ${job}</li>
<li>${2 + 2}</li>
<li>${hello()}</li>
<li>${age > 30 ? "Over 30" : "Under 30"}</li>
<li>City: ${city}</li>
</ul>

`;

document.body.innerHTML = html;
