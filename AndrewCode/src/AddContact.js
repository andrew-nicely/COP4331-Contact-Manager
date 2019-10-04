import React from 'react';
import Popup from "reactjs-popup";

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ open: true });
    console.log("Modal Opened")
  }
  closeModal() {
    this.setState({ open: false });
    console.log("modal Closed");
  }

  //toggleModal() {
    //if(this.state.open ===)
  //}

  render() {
    return (
      <div>
        <p onClick={this.openModal} className="f6 link dim black db pointer">Add Contact</p>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close pointer" onClick={this.closeModal}>
              &times;
            </a>
                <div className="measure mw6">
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 ph0 mh0">Add Contact</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
                      <input className="pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Last Name</label>
                      <input className="b pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Email</label>
                      <input className="b pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Phone Number</label>
                      <input className="b pa2 input-reset ba bg-transparent w-75" type="email" name="email-address"  id="email-address"/>
                    </div>
                  </fieldset>
                  <div className="">
                    <input className="b ph3 pv1 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Add" />
                  </div>
                </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default AddContact;