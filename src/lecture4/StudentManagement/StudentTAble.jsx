import React, { Component } from "react";

export default class StudentTable extends Component {
  state = {
    studentTables :[]
  }
  onSubmitHandler = (e) => {
    e.preventDefault();
    this.props.onAddStudent(this.state)
  };
  onGPAUp = () => {
    const studentTables = this.state.studentTables
    const {students} = this.props.students
    const {Toan, Ly,Hoa } = students
    this.setState({
      studentTables: students
    })
    var GPA = parseFloat((parseInt(Toan)+parseInt(Ly)+parseInt(Hoa)/3).toFixed(1))
    var MaxGPA = 0;
    studentTables.forEach((character=>{
      if(GPA > MaxGPA){
        MaxGPA = GPA
        return MaxGPA
      }
    }))

    var GPAUp = studentTables.sort((a,b)=>a-b)
    const newStudents = studentTables.filter((item) => item !== GPAUp)
    this.setState({
      studentTables: newStudents
    })
  }
  render() {
    const { onDeleteStudents} = this.props;
    const { students } = this.props.students;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <table className="table">
          <thead>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>SĐT</th>
              <th>Email</th>
              <th>Điểm TB</th>
              <th>Hủy Bỏ</th>
              <th>
                <select className="form btn btn-primary" >
                  <option selected>Sắp Xếp</option>
                  <option onClick={() => this.onGPAUp()}>GPA tăng dần</option>
                  <option >GPA giảm dần</option>
                  <option >Họ tên</option>
                </select>
              </th>
            </tr>
          </thead>
          <tbody>
            {students.length > 0 ? (
              students.map((StudentItem) => {
                const { id, email, phoneNumber, fullname, Toan, Ly, Hoa } =
                  StudentItem;
                return (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{fullname}</td>
                    <td>{phoneNumber}</td>
                    <td>{email}</td>
                    <td>
                      {parseFloat(
                        (parseInt(Toan) + parseInt(Ly) + parseInt(Hoa)) / 3
                      ).toFixed(1)}
                    </td>
                    <td>
                      <button
                        type="submit"
                        className="btn btn-primary "
                        onClick={() => onDeleteStudents(StudentItem, id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td>Null</td>
                <td>Null</td>
                <td>Null</td>
                <td>Null</td>
                <td>Null</td>
                <td>Null</td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    );
  }
}
