document.getElementById("studentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const studentName = document.getElementById("studentName").value;
    const studentPhone = document.getElementById("studentPhone").value;
    const studentDOB = document.getElementById("studentDOB").value;
    const studentGender = document.querySelector('input[name="gender"]:checked').value;
    const studentEmail = document.getElementById("studentEmail").value;
    const studentRoll = document.getElementById("studentRoll").value;
    const studentRegDate = document.getElementById("studentRegDate").value;
    const studentBranch = document.getElementById("studentBranch").value;
    const parentName = document.getElementById("parentName").value;
    const parentPhone = document.getElementById("parentPhone").value;
    
    const studentData = {
      name: studentName,
      phone: studentPhone,
      dob: studentDOB,
      gender: studentGender,
      email: studentEmail,
      roll: studentRoll,
      regDate: studentRegDate,
      branch: studentBranch,
      parentName: parentName,
      parentPhone: parentPhone
    };
    
    localStorage.setItem('studentData', JSON.stringify(studentData));
    
    window.location.href = 'display.html';
  });
  