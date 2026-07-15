function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];    
}
  
const student1 = new Student("Anton", "male", 30);
const student2 = new Student("Ivan", "male", 25);
const student3 = new Student("Maria", "female", 35);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (!Array.isArray(this.marks)) {
     console.log("Студент отчислен");
     return;
  }
  this.marks.push(...marks); 

}
// вариант 1
// Student.prototype.getAverage = function () {
//   if (!Array.isArray(this.marks) || this.marks.length === 0){ 
//     return 0;
//   }
 
// const averageMark = this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length;
//   return averageMark;
// }

// вариант2 
Student.prototype.getAverage = function () {
  if (!Array.isArray(this.marks) || this.marks.length === 0){ 
    return 0;
  }
return this.marks.reduce((sum, current, index, arr) => sum + current / arr.length, 0);
}


Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;

}

function testCase() {
// создаем студента
const student = new Student ("Ivan", "male", 25);
console.log(student.name); // Ожидаем "Ivan"

// создаем предмет

student.setSubject("literature");
console.log(student.subject); // Ожидаем "liersture"

// добавляем оценки
student.addMarks(4, 5, 3);
console.log(student.marks); // ожидаем [4, 5, 3]

// вычисляем средний балл
console.log(student.getAverage()); // ожидаем 4

// отчисление
student.exclude("декрет");
console.log(student.excluded); // ожидаем "декрет"
}

testCase();