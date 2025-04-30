// Scroll reveal animation
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        el.classList.add('active');
      }
    });
  });
  
  // BMI Calculator
  function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const result = document.getElementById('bmi-result');
  
    if (!weight || !heightCm || weight <= 0 || heightCm <= 0) {
      result.textContent = "Please enter valid weight and height.";
      return;
    }
  
    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
  
    let category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 24.9) category = "Normal";
    else if (bmi < 29.9) category = "Overweight";
    else category = "Obese";
  
    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category})`;
  }
  
  // Contact form submission (demo only)
  document.getElementById('contact-form').addEventListener('submit', e => {
    e.preventDefault();
    alert("Thank you for contacting us!");
    e.target.reset();
  });
  