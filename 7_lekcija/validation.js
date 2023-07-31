const form = document.querySelector("form");

const inputFields = document.getElementsByTagName("input");

const validation = {
  username: {
    required: true,
    minLength: 5,
    maxLength: 10,
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputFields = document.getElementsByTagName("input");

  Array.from(inputFields).forEach((inputField) => {
    const fieldName = inputField.name;
    const fieldValue = inputField.value;
    const fieldValidation = validation[fieldName];

    if (fieldValidation) {
      if (fieldValidation.required) {
        if (!fieldValue) {
          inputField.classList.add("error");
        }
        console.log(`${fieldName} => ${fieldValue}`);
      }
    }
  });

  console.log(inputFields);
});
