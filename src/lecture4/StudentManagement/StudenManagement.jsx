import React, { Component } from "react";
import StudentForm from "./StudentForm";
import StudentTable from "./StudentTAble";

export default class StudentManagement extends Component {
  state = {
    students: [],
  };

  onAddStudent = (student) => {
    this.setState({
      students: [...this.state.students, student],
    });
  };
  onDeleteStudents = (stu, id) => {
    const students = this.state.students;
    const studentRemove = stu;
    const newStudents = students.filter((item) => item !== studentRemove);
    this.setState({
      students: newStudents,
    });
    console.log(stu);
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center text-primary display-4ý">
         MANAGING STUDENTS
        </h1>

        <StudentForm onAddStudent={this.onAddStudent} />
        <StudentTable
          students={this.state}
          onDeleteStudents={this.onDeleteStudents}
          onAddStudent={this.onAddStudent}
        />
      </div>
    );
  }
}
