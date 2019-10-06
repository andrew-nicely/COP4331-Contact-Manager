import React from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

class AddContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
    open: false, 
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    };
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

  onAddFirstName = (event) => {
    console.log(event.target.value);
    this.setState({firstName: event.target.value});
  }

  onAddLastName = (event) => {
    console.log(event.target.value);
    this.setState({lastName: event.target.value});
  }

  onAddEmail = (event) => {
    console.log(event.target.value);
    this.setState({email: event.target.value});
  }

  onAddPhoneNumber = (event) => {
    console.log(event.target.value);
    this.setState({phoneNumber: event.target.value});
  }

  onSubmitNewContact = () => {
    console.log(this.state);
    const {pullContacts} = this.props;
    const newContact = {
      userID: "munejae",
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      emailAddress: this.state.email,
      phoneNum: this.state.phoneNumber,
    }
    axios.post('http://localhost:4000/contacts/add', newContact)
    .then(res => {
      // 
      const {data} = res;

      if (data === "fail")
        console.log("Not Added");
      
      else
        console.log("Added Contact");
        //const {onSignIn} = this.props;
        //onSignIn(user.userID);
        this.closeModal();
        pullContacts();
        
        
      
      });
  }


  //toggleModal() {
    //if(this.state.open ===)
  //}

  render() {
    return (
      <div>
        <p onClick={this.openModal} className="f6 link dim br3 ba ph3 pv2 db black pointer">Add Contact</p>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
                <div className='bg-light-gray'>
                  <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f4 fw6 mt2 ph0 mh0">Add Contact</legend>
                    <div className="mt3">
                      <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
                      <input className="pa2 input-reset ba bg-white w-75" onChange={this.onAddFirstName} type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Last Name</label>
                      <input className="b pa2 input-reset ba bg-white w-75" onChange={this.onAddLastName} type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Email</label>
                      <input className="b pa2 input-reset ba bg-white w-75" onChange={this.onAddEmail} type="email" name="email-address"  id="email-address"/>
                    </div>
                    <div className="mv3">
                      <label className="db fw6 lh-copy f6" htmlFor="password">Phone Number</label>
                      <input className="b pa2 input-reset ba bg-white w-75" onChange={this.onAddPhoneNumber}type="email" name="email-address"  id="email-address"/>
                    </div>
                  </fieldset>
                  <div className="">
                    <input className="b ph3 pv1 mv2 input-reset ba b--black bg-white grow pointer f6 dib" onClick={() => this.onSubmitNewContact()} type="submit" value="Add" />
                  </div>
                </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default AddContact;