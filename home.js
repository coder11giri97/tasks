class Student{
  static count = 0;
  constructor(name, age, pno, marks){
    this.name = name;
    this.age = age;
    this.phoneno = pno;
    this.marks = marks;
    Student.count++;
  }

  isEligibleCollege(){
    return this.marks >= 40 ? true : false;
  }

  isEligiblePlacement(minMarks){
    return (reqAge) => {
      return this.marks >= minMarks && this.age >= reqAge ? true : false;
    }
  }
}

const st1 = new Student("giri", 24, "3746734", 80);
const st2 = new Student("ishwar", 25 , "379734", 60);
const st3 = new Student("guru", 26, "3746134", 70);
const st4 = new Student("shubham", 28, "1746734", 50);
const st5 = new Student("sandeep", 24, "3946734", 60);

if(st1.isEligiblePlacement(70)(18)) console.log(st1.name);
if(st2.isEligiblePlacement(70)(18)) console.log(st2.name);
if(st3.isEligiblePlacement(70)(18)) console.log(st3.name);
if(st4.isEligiblePlacement(70)(18)) console.log(st4.name);
if(st5.isEligiblePlacement(70)(18)) console.log(st5.name);