function validationCheckform() {
  var strEm = document.getElementById("emailaddress4validation").value;
  var strPw = document.getElementById("password4validation").value;
  var fName = document.getElementById("fName").value;
  if (strPw.length < 10 || strPw.length > 20) {
    alert("Password format is between 10-20 characters.");
  } else if (strEm.match(/^([a-z0-9_\.\-])+@([a-z0-9_\.\-])+[^.]$/i)) {
    alert("Welcome to log in, " + fName + " !");
  } else {
    alert(
      "Email address format is invalid. Review the below character(s).\n（" +
        strEm.match(/[^0-9 ０-９ a-z ａ-ｚ A-Z Ａ-Ｚ]/g) +
        "）"
    );
  }
}

// Exclusive Selection chkbox
// function chbx(obj) {
//   var that = obj;
//   if (document.getElementById(that.id).checked == true) {
//     document.getElementById("id1").checked = false;
//     document.getElementById("id2").checked = false;
//     document.getElementById("id3").checked = false;
//     document.getElementById(that.id).checked = true;
//   }
// }
const selectElement = document.querySelector(".saltation");
selectElement.addEventListener("change", (event) => {
  const result = document.querySelector(".result");
  const errormsg = document.querySelector(".errormsg");
  const signupbtn = document.querySelector(".signupbtn");
  var fName = document.getElementById("fName").value;
  result.textContent = `Welcome,  ${event.target.value} ${fName}`;
  errormsg.textContent = ``;
  signupbtn.innerHTML = `<button class="btn" onclick="validationCheckform()">Sign up</button>`;
});

function isValidEm(objEm) {
  var str = objEm.value;
  const errormsg = document.querySelector(".errormsg");
  if (!str.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    errormsg.textContent = `Email address format is invalid. Please type it in correct format.
    `;
    objEm.value = "";
    return false;
  } else {
    errormsg.textContent = `👍😎(●'◡'●)Now email address is good to go.
    `;
  }
}

function isValidPw(objPw) {
  var str = objPw.value;
  const errormsg = document.querySelector(".errormsg");
  if (str.length < 10 || str.length > 20) {
    errormsg.textContent = `Password format is between 10-20 characters.
    `;
    objPw.value = "";
    return false;
  } else {
    errormsg.textContent = `👍😎(●'◡'●)Now password looks fine.
  `;
  }
}
