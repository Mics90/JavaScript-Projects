function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("Please enter your name!dd");
      return false;
    }
  }