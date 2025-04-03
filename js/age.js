document.addEventListener("DOMContentLoaded", function () {
  function calculateAge(birthDate) {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    return age;
  }

  const birthDate = "2000-01-20";
  document.getElementById("age").textContent = calculateAge(birthDate);

  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
