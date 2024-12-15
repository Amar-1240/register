document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const userDataContainer = document.getElementById("userData");
    const dobInput = document.getElementById("dob");
    const today = new Date();
    const minBirthYear = today.getFullYear() - 55;
    const maxBirthYear = today.getFullYear() - 19;
  
    dobInput.setAttribute("min", `${minBirthYear}-01-01`);
    dobInput.setAttribute("max", `${maxBirthYear}-12-31`);
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const dob = document.getElementById("dob").value;
      const termsChecked = document.getElementById("terms").checked;
  
      const today = new Date();
      const birthDate = new Date(dob);
      let age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
  
      if (age >= 18 && age <= 55) {
        const dobFormatted = formatDate(dob);
  
        const userData = {
          name: name,
          email: email,
          password: password,
          dob: dobFormatted,
          termsChecked: termsChecked ? "Yes" : "No",
        };
  
        const row = document.createElement("tr");
        for (const key in userData) {
          const cell = document.createElement("td");
          cell.textContent = userData[key];
          row.appendChild(cell);
        }
        userDataContainer.appendChild(row);
  
        form.reset();
      } else {
        alert("Age must be between 18 and 55 years old.");
      }
    });
  
    function formatDate(dateString) {
      const options = { day: "numeric", month: "numeric", year: "numeric" };
      return new Date(dateString).toLocaleDateString(undefined, options);
    }
  });
  