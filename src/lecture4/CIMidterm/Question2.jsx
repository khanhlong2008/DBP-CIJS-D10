import React, { Component } from "react";

class Question2 extends Component {
  render() {
    return (
      
        <div className="card ">
          <h1 className="background">Which language runs in a web browser?</h1>
          <div className="card-body ">
            <div className="radio background">
              <label>
                <input type="radio" name="" value="" checked="checked" />
                Radio Box
              </label>
            </div>
            <div className="radio background">
              <label>
                <input type="radio" name="" value="" checked="checked" />
                Radio Box
              </label>
            </div>
            <div className="radio background">
              <label>
                <input type="radio" name="" value="" checked="checked" />
                Radio Box
              </label>
            </div>
            <div className="radio background">
              <label>
                <input type="radio" name="" i value="" checked="checked" />
                Radio Box
              </label>
            </div>
            <button className="background btn btn-primary size">Submit</button>
          </div>
        </div>
      
    );
  }
}

export default Question2;
