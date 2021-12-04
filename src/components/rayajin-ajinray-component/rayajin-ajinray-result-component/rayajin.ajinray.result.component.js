import React from "react";
import "./rayajin.ajinray.result.component.css";
import ResultHeader from "./logo_icai.png"
import { TransferWithinAStationSharp } from "@material-ui/icons";


class RayAjinResultComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        showResult: false,
        rollNum:"152364",
        regNum:"CRO0577579",
        captcha: "",
        error : false
      };
  }

  handleRollNumChange = (e) => {
      this.setState({rollNum : e.target.value})
  }
  
  handleRegNumChange = (e) => {
    this.setState({regNum : e.target.value})
}

handleCaptchaChange = (e) => {
    this.setState({captcha : e.target.value})
}
  handleSubmit = () => {
      let {regNum, captcha} = this.state
      if (regNum === "CRO0577579" && captcha === "iluray12"){
          this.setState({showResult: true})
      }
      else {
          this.setState({error : true})
      }

  }  

  

  render() {

    return (
        <div className="AjinRay-result">
            <div className="AjinRay-result-header">
                <div className="AjinRay-result-header-img">
                    <img src={ResultHeader}></img>
                </div>
                <div className="AjinRay-result-header-txt">
                    Exam results
                </div>
            </div>
            <div className="AjinRay-result-text">
                Final (New) Exmination Results, December 2021
            </div>

            { this.state.showResult ? (
                <div className="AjinRay-result-table-div">
                    <table className="table">
                        <tr>
                            <td>Roll Number</td>
                            <td>152364</td>
                        </tr>
                        <tr className="tr-blue">
                            <td>Name</td>
                            <td>SHRAYANSHI JAIN</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="tr-bold">
                            <td>Group I</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Financial Reporting</td>
                            <td>058</td>
                        </tr>
                        <tr>
                            <td>Strategic Financial Management</td>
                            <td>068</td>
                        </tr>
                        <tr>
                            <td>Advanced Auditing and Professional Ethics</td>
                            <td>064</td>
                        </tr>
                        <tr>
                            <td>Corporate and Economic Laws</td>
                            <td>058</td>
                        </tr>
                        <tr className="tr-bold">
                            <td>Total</td>
                            <td>248</td>
                        </tr>
                        <tr className="tr-blue" style={{background: '#004d80'}}>
                            <td>Result</td>
                            <td>PASS</td>
                        </tr>
                        <tr className="tr-bold">
                            <td>Group II</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Strategic Cost Management & Performance Evaluation</td>
                            <td>058</td>
                        </tr>
                        <tr>
                            <td>Elective Paper [6D Economic Laws]</td>
                            <td>084</td>
                        </tr>
                        <tr>
                            <td>Direct Tax Laws & International Taxation</td>
                            <td>075</td>
                        </tr>
                        <tr>
                            <td>Indirect Tax Laws</td>
                            <td>070</td>
                        </tr>
                        <tr className="tr-bold">
                            <td>Total</td>
                            <td>287</td>
                        </tr>
                        <tr className="tr-blue" style={{background : '#004d80'}}>
                            <td>RESULT</td>
                            <td>PASS</td>
                        </tr>
                        <tr className="tr-blue" style={{background : '#004d80'}}>
                            <td>Grand Total</td>
                            <td>535</td>
                        </tr>
                    </table>
                </div>
                ): (
                    <div className="AjinRay-result-form-div">
                        <div>
                            Enter your 6 digit Roll Number to check your results
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            Roll No.
                            <input type="text" value={this.state.rollNum} onChange={this.handleRollNumChange}></input>
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            PIN No.
                            <input type="text"></input>
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            OR
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            Registration No.
                            <input type="text" value={this.state.regNum} onChange={this.handleRegNumChange}></input>
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            Enter the text as shown in the below box
                        </div>
                        <div className="AjinRay-result-form-row-div">
                            <div style={{font: 'arial'}}>
                                iluray12
                            </div>
                            <input type="text" value={this.state.captcha} onChange={this.handleCaptchaChange}></input>
                        </div >
                        <div className="AjinRay-result-form-row-div">
                            <button onClick={this.handleSubmit}>Submit</button>    
                        </div>
                        {
                            this.state.error ? (<div style={{color:'#ff0000'}}>Error, please provide correct values.</div>) : null
                        }
                    </div>
                )
            }
            
        </div>
    );
  }
}

export default RayAjinResultComponent;
