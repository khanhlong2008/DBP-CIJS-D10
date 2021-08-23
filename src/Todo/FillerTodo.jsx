/* eslint-disable no-useless-constructor */
import { Component } from "react";
class FillerTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keywork:''
    }
  }
  onChange = e =>{
    var target = e.target
    var name = target.name
    var value = target.value
    this.setState({
      [name]:value
    })
  }
  onSearch = ()=>{
    this.props.onSearch(this.state.keywork)
  }
  render() {
    var {keywork} = this.state.keywork
    return (
      <> 
        
          <div className="txt_field">
            <div className="display">
              <input 
              type="text" 
              name="keywork" 
              placeholder="Tim Kiem" 
              value={keywork}
              onChange={this.onChange}
              />
              <button 
              className="margin" 
              onClick={this.onSearch}
              >Clear</button>
            </div>
            <label />
          </div>
       
      </>
    );
  }
}
export default FillerTodo;
