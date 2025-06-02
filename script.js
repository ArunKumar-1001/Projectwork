console.log("hello");
//=---------------DATES---------
console.log("hello");
// =---------------DATES---------
let dates = [];
for (let month = 0; month < 12; month++) {
  let date = new Date(2025, month, 1);
  while (date.getMonth() === month) {
    let dayNumber = date.getDate();
    let dayName = date.toLocaleString("en-US", { weekday: "long" });
    let daydetails = {
      day: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
        2,
        "0"
      )}-${String(date.getDate()).padStart(2, "0")}`,
      dayNumber: dayNumber,
      dayName: dayName,
    };
    dates.push(daydetails);
    date.setDate(date.getDate() + 1);
  }
}
console.log(dates);

//------STUDENTS---------
let students = [];
let addStu = document.getElementById("addStu");
addStu.addEventListener("click", () => {
  console.log("add Student");
  let sId = prompt("Enter Student Id:");
  let sName = prompt("Enter Student Name:");
  let noOfDaysPresent = 0;
  let totalDays = 0;
  let percentage = 0;
  let student = {
    id: sId,
    name: sName,
    // statusByDate : statusByDate,
    noOfDaysPresent: noOfDaysPresent,
    totalDays: totalDays,
    statusByDate: {},
    percentage: percentage,
  };
  students.push(student);
  let details = document.getElementById("details");
  details.innerHTML = `Id of the Student: ${student.id} and Name of the Student : ${student.name}`;
  console.log(students);
});

let Take_Attendance = document.getElementById("Take_Attendance");
Take_Attendance.addEventListener("click", () => {
  let today = document.getElementById("today").value;
  //today=today.toString();
  console.log(today);
  if (dates.some((item) => item.day === today)) {
    console.log("Take Att");
    students.forEach((student) => {
      student.totalDays++;
      let dayStatus = prompt(
        `To day - ${today} ${student.name} is present or not or quarter present`
      );
      if (dayStatus === "present") {
        student.noOfDaysPresent++;
        console.log(dayStatus);
        student.statusByDate[today] = "🟩";
        //console.log(statusByDate)
      } else if (dayStatus == "quarter present") {
        student.noOfDaysPresent += 0.5;
        student.statusByDate[today] = "🟨";
      } else if (dayStatus === "no") {
        student.noOfDaysPresent = student.noOfDaysPresent;
        student.statusByDate[today] = "🟥";
      } else {
        prompt("Enter valid status");
      }
    });
  } else {
    prompt("select valid date");
  }
});

let seeDetails = document.getElementById("seeDetails");
seeDetails.addEventListener("click", () => {
  // let div = document.createElement("div")
  let table = document.createElement("table");
  table.border = "1";
  let tr = document.createElement("tr");
  let NameRow = document.createElement("th");
  NameRow.innerHTML = "Student Name";
  tr.appendChild(NameRow);
  dates.forEach((date) => {
    let th = document.createElement("th");
    th.innerText = `${date.dayNumber} (${date.dayName})`;
    tr.appendChild(th);
  });
  let no_OfDaysPresent = document.createElement("th");
  no_OfDaysPresent.innerText = "no_OfDaysPresent";
  tr.appendChild(no_OfDaysPresent);
  let persentage = document.createElement("th");
  persentage.innerText = "persentage";
  tr.appendChild(persentage);
  table.appendChild(tr);
  //headerRow.appendChild(document.createElement("th")).innerText = "Date";
  if (students.length > 0) {
    //--------student detal----
    students.forEach((student) => {
      let stu1 = document.createElement("tr");
      let stuName = document.createElement("td");
      stuName.innerHTML = `${student.name}`;
      stu1.appendChild(stuName);

      dates.forEach((date) => {
        let td = document.createElement("td");
        let status = student.statusByDate[date.day];
        td.innerText = status || ""; // show nothing if no attendance
        // stuRow.appendChild(td);

        // dates.forEach(dayStatus => {
        //     let td = document.createElement("td");
        //     let invalue = "";
        //     //invalue=prompt(`${dayStatus .dayNumber} (${dayStatus .dayName})`)
        //     //console.log(invalue)
        //     if(invalue==="yes"){
        //         td.innerText = `${"green"}`;
        //     }
        //     else if(invalue==="absent"){
        //         td.innerText = `${"red"}`;
        //     }
        //     else if(invalue==="half"){
        //         td.innerText = `${"yellow"}`;
        //     }
        //     else{
        //         //prompt("please enter valid status:")
        //         td.innerText = "wrong"
        //     }

        stu1.appendChild(td);
      });
      let stunoday = document.createElement("td");
      stunoday.innerText = `${student.noOfDaysPresent}`;
      stu1.appendChild(stunoday);
      let stuper = document.createElement("td");
      student.percentage = (student.noOfDaysPresent / student.totalDays) * 100;
      stuper.innerText = `${student.percentage}`;
      stu1.appendChild(stuper);

      table.appendChild(stu1);
    });
  }

  //headerRow.appendChild(document.createElement("th")).innerText = "Date";
  let table_container = document.getElementById("table_container");
  table_container.appendChild(table);
});

//
//}
// th.innerHTML = `${sName.value}`;
// row.appendChild(th)
// table.appendChild(row)
// div.appendChild(table)

//let headerRow = document.createElement("tr");

// for (date of dates) {
//     let th = document.createElement("th")
//     if (date.dayName === "Sunday") {
//         th.innerHTML = "🟦"
//     }
//     else {
//         th.innerHTML = `${ date.dayNumber } ${ date.dayName }`
//         row.appendChild(th)
//     }
//     document.createElement("input");

// }
