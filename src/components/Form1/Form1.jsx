import React from "react";
import "./Form1.css";

const Form1 = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formlist">
          <form action="#">
            <div className="form-group">
              <table>
                <label htmlFor="name">Name:</label>
                <input type="text" name="" id="" />
              </table>
            </div>
            <div className="form-group">
              <table>
                
              </table>
              <label htmlFor="nickName">NickName</label>
              <input type="text" name="" id="" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea name="" id=""></textarea>
              <label htmlFor="phonenum">Phone Number</label>
              <input type="text" name="" id="" />
            </div>
            <div className="form-group">
              Gender
              <input type="radio" name="male" id="" />
              Male
              <input type="radio" name="female" id="" />
              Female
            </div>
            <div className="form-group">
              <label>
                Drop Dowm
                <select name="school" id="">
                  <option value="VVMS">VVMS</option>
                  <option value="SSV">SSV</option>
                  <option value="RMHS">SSV</option>
                  <option value="BVB">BVB</option>
                  <option value="TIPS">TIPS</option>
                </select>
              </label>
            </div>
            <div className="formGroup">
              <button type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form1;
