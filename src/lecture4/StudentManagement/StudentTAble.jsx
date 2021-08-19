import React, { Component } from "react";

const GPA_UP = 2;
const GPA_DOWN = 3;
const NAME = 4;

export default class StudentTable extends Component {
  state = {
    sortType: null, // 1: GPA up, 2: GPA down, 3: Họ tên
  };

  //   Mỗi lần type thay đổi thì set lại state thì component render lại theo cái type đó
  onSortChange = (e) => {
    this.setState({
      sortType: e.target.value,
    });
  };

  render() {
    let { students } = this.props.students;
    const { onDeleteStudents } = this.props;
    students = students.map((students) => {
      const { id, email, fullname, phoneNumber, Toan, Ly, Hoa } = students;
      const GPA = (parseFloat(Toan) + parseFloat(Ly) + parseFloat(Hoa)) / 3;
      return {
        id,
        email,
        fullname,
        phoneNumber,
        GPA: Math.round(GPA, 1),
      };
    });
    // console.log(students);
    switch (+this.state.sortType) {
      case GPA_UP:
        students.sort((a, b) => a.GPA - b.GPA);
        break;
      case GPA_DOWN:
        students.sort((a, b) => b.GPA - a.GPA);
        break;
      case NAME:
        students.sort((a, b) => {
          return a.fullname.localeCompare(b.fullname);
        });
        break;
      default:
        break;
    }
    return (
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
              <select
                className="form btn btn-primary"
                onChange={this.onSortChange}
              >
                <option value={null} selected>
                  Sort
                </option>
                <option value={GPA_UP}>ĐTB tăng dần</option>
                <option value={GPA_DOWN}>ĐTB giảm dần</option>
                <option value={NAME}>Họ tên</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {students.length > 0 ? (
            students.map((StudentItem) => {
              const { id, email, phoneNumber, fullname,GPA} =
                StudentItem;
              return (
                <tr key={id}>
                  <td>{id}</td>
                  <td>{fullname}</td>
                  <td>{phoneNumber}</td>
                  <td>{email}</td>
                  <td>
                    {GPA}
                  </td>
                  <td>
                    <button
                      
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
    );
  }
}
