const calculateBMI31 = (weight, height) => {
  if (height <= 0 || weight <= 0) return { bmi: null, category: 'ข้อมูลไม่ถูกต้อง' };
  const bmi = weight / (height * height);
  let category = '';
  if (bmi < 18.5) category = 'ผอม';
  else if (bmi < 24.9) category = 'สมส่วน';
  else category = 'อ้วน';
  return { bmi: parseFloat(bmi.toFixed(2)), category };
};

const displayBMI31 = () => {
  const w = parseFloat(document.getElementById('bmiWeight31').value) || 0;
  const h = parseFloat(document.getElementById('bmiHeight31').value) || 0;
  const result = calculateBMI31(w, h);
  const msg = result.bmi === null ? result.category : `BMI = ${result.bmi} (${result.category})`;
  document.getElementById('bmiResult31').textContent = msg;
  console.log('BMI 3.1:', { weight: w, height: h, ...result });
};

document.addEventListener('DOMContentLoaded', () => {
  const btnBmi31 = document.getElementById('btnBmi31');
  if (btnBmi31) btnBmi31.addEventListener('click', displayBMI31);
});
