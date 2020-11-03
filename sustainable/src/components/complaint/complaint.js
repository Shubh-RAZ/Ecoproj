import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import './complaint.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';


export default class Complaint extends Component {
  render() {
    return (
    <div>
        <div className="row">
            <div className="col-md-8 offset-md-2 complaint-box">
            <div className="signin-form col-6">
              <form action="" method="post">

                <div className="form-group">
                  <div className ="icon-name">
                    <input type="text" className="form-control" name="First Name" placeholder="First Name" autocomplete="off" required></input>
                    <input type="text" className="form-control" name="Last Name" placeholder="Last Name" autocomplete="off" required></input>
                  </div>
                </div>

                <div className="form-group">
                    <div className="icon-name">
                      <input type="text" className="form-control" name="Mail" placeholder="E-Mail" autocomplete="off" required></input>
                      <input type="text" className="form-control" name="phone" placeholder="phone" autocomplete="off" required></input>
                    </div>
                </div>

                <div className="form-group">
                    <div className="icon">
                      <input type="text" className="form-control" name="message" placeholder="Type Your Message Here" autocomplete="off" required></input>
                    </div>
                </div>


                <div class="form-group">
                    <button type="submit" className="btn btn-outline-success btn-lg btn-block" name="sign_in">Submit</button>
                </div>
              </form>
            </div>

            <div className="col-md-6 contact">
              <div className="contact-header ct">
                Join Us With 
              </div>
              <div className="contact-icon ct">
                  <span><i class="fa fa-github icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-youtube icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-facebook-square icon-social" aria-hidden="true"></i></span>
                  <span><i class="fa fa-instagram icon-social" aria-hidden="true"></i></span>
              </div>

              <div className="space">
                
              </div>
            </div>
              </div>
        </div>   
     </div>  
    )
  }
}
