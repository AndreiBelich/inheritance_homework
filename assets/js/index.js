"use strict";

class User{
  constructor(name, surname){
    this.name = name;
    this.surname = surname;
  }

  getFullName(){
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User{
  constructor(name, surname, year){
    super(name, surname);
    this.year = year;
  }

  getCourse(){
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year + 1;
    if(course < 1){
      throw new Error(`Возникла ошибка, возможно неверно указан год поступления!`)
    }
    if(course > 5){
      throw new Error("Произошла ошибка. Возможно студент уже закончил университет! За дополнительной информацией обратитесь к администратору.")
    }
    return course;
  }
}

const student1 = new Student("Ivanov", "Ivan", 2021);
const student2 = new Student("Petrov", "Petr", 2019);
const student3 = new Student("Sergeev", "Sergey", 2015);
const students = [student1, student2, student3];
students.forEach((student) => console.log(`Student ${student.getFullName()} studying on ${student.getCourse()} course.`));