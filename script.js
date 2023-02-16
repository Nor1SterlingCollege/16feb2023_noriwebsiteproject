///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

function func1() {
  var outputEchoit = document.getElementById("intext").value;
  document.getElementById(
    "show"
  ).innerHTML = `<br><font size="50" face="impact"> ${outputEchoit}</font>`;
}

function echoform() {
  const fColor = document.getElementById("fColor").value;
  const fFood = document.getElementById("fFood").value;
  const sName = document.getElementById("sName").value;
  const ageEcho = document.getElementById("ageEcho").value;
  const lName = document.getElementById("lName").value;
  const fName = document.getElementById("fName").value;

  // if (age >= 18) {
  //   alert("You are a valid user and your name is " + fName + " " + lName + ".");
  // } else {
  //   alert(
  //     "You are not allowed to create an account with the system. Good bye."
  //   );
  // }
  document.getElementById("showFormOutput").innerHTML = `

     <p style="font-size:50px">Hi ${fName} ${lName},<br>
     Thank you for the registration.<br>
     Your favorite color is ${fColor}.<br>
     Your favorite food is ${fFood}.<br>
     Your school is ${sName}.<br>
     Currently you are ${ageEcho} year(s) old.</p>
   `;
}

/*waver */

const labels = document.querySelectorAll(".form-controlwaver label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

/*3Feb2023 radius calc*/
function radiuscalc() {
  var r = document.getElementById("radius").value;
  if (r == 0) {
    document.getElementById("outcomeradiuscalc").innerHTML =
      "Nori says 「radius cannot be zero」";
  } else {
    var result = 3.14 * r * r;
    document.getElementById("outcomeradiuscalc").innerHTML =
      "Area is " + result;
  }
}

/* 
   5Feb2023 - Arrays&Loop Pre-Study SesameCharPopularRankTop5 
    
   Functions:
    
   charSortDescending(a, b)
      A callback function used to sort the donation amounts from the array in descending order
      
   writeCharacterRow(value)
      A callback function that writes the HTML code for each table row that provides the contact
      information for the donor
      
*/

function revealRankSesameCharRank() {
  /* Sort the array in descending order of donation */
  sesameCharRank.sort(charSortDescending);

  /* Create a table of major donors */
  var sesameTable = "<table>";
  sesameTable += "<caption>Rank5</caption>";
  sesameTable += "<tr><th>Name</th><th>Vote Gained</th></tr>";

  /* Write a separate table row for each donor */
  sesameCharRank.forEach(writeCharacterRow);
  sesameTable += "</table>";

  function charSortDescending(a, b) {
    return b[2] - a[2];
  }

  function writeCharacterRow(value) {
    sesameTable += "<tr>";
    sesameTable += "<td>" + value[1] + "</td>";
    sesameTable += "<td>" + value[2] + "</td>";
    sesameTable += "</tr>";
  }
  document.getElementById("SesameCharPopularRankTop5Summary").innerHTML =
    sesameTable;
  document.getElementById("SesameCharPopularRankTop5SummaryImg").innerHTML = `
  <div class="container center-text"><p style="font-size:50px">Cookie Monster is the most popular one! <br>
    <center><img src="http://aulani.client.jp/img/sesameTpReveal.jpg" width=60%></center>
    </p></div>
  `;
}

/**Push FizzBuzz   Arrays etc. Pre Study 5 Feb 2023 5Feb2022_ArraysPreStudy.js */

function fizzBuzz() {
  var fizzBuzzOutput = [];
  var fizzBuzzCount = 1;
  while (fizzBuzzCount <= 100) {
    if (fizzBuzzCount % 3 === 0 && fizzBuzzCount % 5 === 0) {
      fizzBuzzOutput.push("FizzBuzz");
    } else if (fizzBuzzCount % 3 === 0) {
      fizzBuzzOutput.push("Fizz");
    } else if (fizzBuzzCount % 5 === 0) {
      fizzBuzzOutput.push("Buzz");
    } else {
      fizzBuzzOutput.push(fizzBuzzCount);
    }
    fizzBuzzCount++;
  }

  document.getElementById("fizzBuzzPlaceHolder").innerHTML = `
      <p style="font-size:5px">${fizzBuzzOutput}</p><br>`;

  alert(fizzBuzzOutput);
}

/** Time tables 9x9  Arrays etc. Pre Study 5 Feb 2023 5Feb2022_ArraysPreStudy.js */
function timeTables() {
  for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      alert(i + "×" + j + "=" + i * j);
    }
  }
}

/* 6feb2023 - table node No.1*/

// function array6feb2023() {
//   let arr = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//   ];
//   console.log(arr);

//   const tb = document.getElementById("tbody");
//   console.log(tb);

//   arr.forEach((x) => {
//     const tr = document.createElement("tr");
//     tb.appendChild(tr);
//     for (let i = 0; i < arr.length; ++i) {
//       console.log("i");
//       console.log(i);
//       console.log("x[i]");
//       console.log(x[i]);
//       tdi = `td${i}`;
//       tdi = document.createElement("td");
//       tdi.textContent = x[i];
//       tr.appendChild(tdi);
//     }
//   });
// }

/* 6feb2023: FormPW dup chk */
function pwchecking_validation() {
  const fName = document.getElementById("fName").value;
  const pw1st = document.getElementById("pw1st").value;
  const pw2nd = document.getElementById("pw2nd").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const sRange = document.getElementById("sRange").value;

  if (pw1st != pw2nd) {
    alert("Password mismatch");
  } else if (sRange == "2000-3000" && age <= 50 && gender == "male") {
    alert("You are a eligible for loan! " + fName + ".");
  } else {
    alert(
      "You are not allowed to create an account for loan with our system. Good bye."
    );
  }
}

// /* eventListner_7feb2023 */

// function eventListner_7feb2023() {}
// pw1st_eventListner_7feb2023 = document.getElementById(
//   "pw1st_eventListner_7feb2023"
// ).value;
// var pw2nd_eventListner_7feb2023 = document.getElementById(
//   "pw2nd_eventListner_7feb2023"
// ).value;
// if (pw1st_eventListner_7feb2023 == pw2nd_eventListner_7feb2023) {
//   alert("Reg successful");
// } else {
//   confirm("Rechk pw");
// }
// var l = document.getElementsByClassName("eventListner_7feb2023_class");
// for (var i = 0; i < l.length; i++) {
//   l[i].onmouseover = buttoncheck_eventListner_7feb2023;

// }
// function buttoncheck_eventListner_7feb2023(e);
// {
//   var id=e.target.id;
//   switch(id)

// //   {case "fNam_eventListner_7feb2023":
// //   document.getElementById ("labelUser_eventListner_7feb2023").innerHTML="SSS";
// // break;
// {case "button1_7feb2023":alert("button1_7feb2023");
// break;
// case "button2_7feb2023":alert ("button2_7feb2023");
// break;}

// }
