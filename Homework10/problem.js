/****
 * References
 * https://developer.mozilla.org/en-US/docs/Web/API/Constraint_validation
 * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
 * https://regexr.com/ - Tool by Grant Skinner for testing Regular Expressions
 *
 */

// დაამატეთ ვალიდაციები ინფუთებს რომლებსაც არ აქვთ,
//  სახელზე დამატეთ რომ ჩაწერილი იყოს მხოლოდ john ან jane ქეის სენსითივი არ უნდა იყოს.
// ტელეფონზე დაამატეთ რომ იყოს ქართული ნომერი, ანუ იწყებოდეს +995 და თვითონ ნომერი არ იქყოს 9 სიმბოლოზე მეტი მაგალითად (+995599909090)
// პაროლზე თვითონ ფუნქციაში მიწერია როგორი უნდა იყოს პაროლი.

const APP = {
  init() {
    APP.addListeners();
  },
  addListeners() {
    let form = document.sampleForm;
    let email = document.getElementById("email");
    email.addEventListener("change", APP.testEmail);
    //what to do if something went wrong during validation
    email.addEventListener("invalid", APP.fail);

    //when the form gets submitted
    form.addEventListener("submit", APP.validate);
  },
  validate(ev) {
    ev.preventDefault();
    let form = ev.target;

    let email = document.getElementById("email");
    console.log("willValidate", email.willValidate);
    //run validation on the whole form when submitting...

    // form controls have the following
    // invalid event
    console.log(email.validity);
    // validity readonly prop - a ValidityState object
    // ValidityState object props: (Boolean values)
    // badInput, customError, patternMismatch, rangeOverflow, rangeUnderflow
    // stepMismatch, tooLong, tooShort, typeMismatch, valid, valueMissing
    //
    // willValidate readonly prop - boolean

    // validationMessage - readonly prop from browser validation
    //                    or setCustomValidity( ) method

    // checkValidity() checks element, returns boolean,
    //                fires the invalid event

    // reportValidity() checks AND reports result
    //                  this shows the browser tooltip with warning
    //                  can be called at any point to show message

    // setCustomValidity(msg) if called with non-empty string it
    //                    will change the value of validity.valid
    //                    to false and validity.customError to true
  },
  testName(ev) {
    let name = ev.target;

    let currently = name.checkValidity();

    if (currently) {
      let nameRegex = /^j(ane|ohn)$/i;
      if (!nameRegex.test(name.value)) {
        name.setCustomValidity("Invalid name.")
      }
      name.reportValidity();

    }

  },
  testEmail(ev) {
    let email = ev.target;
    console.log("willValidate | ", email.willValidate);
    console.log("validity object ", email.validity);

    email.setCustomValidity(""); //clear old message
    //built-in test for error based on type, pattern, and other attrs
    let currently = email.checkValidity();
    console.log("currently", currently);
    console.log("validation message | ", email.validationMessage);

    if (currently) {
      let emReg = new RegExp("@gmail.com$", "i");
      if (emReg.test(email.value) === false) {
        //not a gmail address
        console.log("NOT a gmail address");
        email.setCustomValidity("NOT a gmail address.");
        console.log(email.validity);
        email.reportValidity(); //show the custom message, trigger invalid event
      }
    }
  },

  formatPhone(ev) {
    let phone = ev.target;
    phone.setCustomValidity("");
    let currently = phone.checkValidity();
    if (currently) {
      let phoneRegex = /\+995-?(\d{3}-?\d{3}-?\d{3}){0,9}$/;
      if (!phoneRegex.test(phone.value)) {
        phone.setCustomValidity("Invalid phone number.");
        phone.reportValidity;
      }
    }
  },

  checkPasswordRequirements(input) {
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*().,?;:~]).{10,}$/;
    if (!passwordRegex.test(input)) {
      console.log('invalid password');
    }
    //check password requirements as user types
    // uppercase, lowercase, numeric, length >= 10
    // Allowed: [! @ # $ % ^ & * ( ) . , ? ; : ~]
  },
  fail(ev) {
    let field = ev.target;
    // the invalid event fired
    console.log("INVALID");
    //standard display change for any element
    switch (field.id) {
      case "email":
        let span = field.parentElement.querySelector(".errMessage");
        span.textContent = "Must be a valid Gmail address.";
        break;
    }
  },
};
document.addEventListener("DOMContentLoaded", APP.init);
