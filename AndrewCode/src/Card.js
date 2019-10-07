import React from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

const url = "http://localhost:4404/";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      firstName : this.props.firstName,
      lastName : this.props.lastName,
      email : this.props.email,
      phoneNumber : this.props.phoneNumber, 
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

  onFirstNameChange = (event) => {
    this.setState({firstName : event.target.value})
  }

  onLastNameChange = (event) => {
    this.setState({lastName : event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email : event.target.value})
  }

  onPhoneNumberChange = (event) => {
    this.setState({phoneNumber : event.target.value});
  }

editContact = () => {
    const {pullContacts} = this.props;
    //const id = this.props.id;
    //console.log(id);
    const editedUser = {
      _id: this.props.id,
      userID : this.props.currentUser,
      firstName : this.state.firstName,
      lastName : this.state.lastName,
      emailAddress : this.state.email,
      phoneNum : this.state.phoneNumber,
    }
    console.log(editedUser);
    axios.post(url + 'contacts/update', editedUser)
    .then(res => {
      // 
      const {data} = res;

      if (data === "fail") {
        console.log("Not Edited");
      }
      
      else{
        console.log("Edited");
        this.closeModal();
        pullContacts();
      }
    });
  }


deleteContact = () => {
		console.log(this.state);
    const {pullContacts} = this.props;
    const id = this.props.id;
    console.log(id);
		axios.post(url + 'contacts/delete', {_id: id})
		.then(res => {
			// 
			const {data} = res;

			if (data === "fail") {
				console.log("Not Deleted");
      }
			
			else{
				console.log("Deleted");
        pullContacts();
      }
		});
	}

  //toggleModal() {
    //if(this.state.open ===)
  //}

  render() {
    const { firstName, lastName, email, phoneNumber } = this.props;
    return (
      <div className='dib'>
        <div className='tc bg-light-gray dib br3 pa3 ma2 shadow-5 o-90'>
          <div className='flex justify-center'>
            <p className="f6 link dim br3 ba ph3 db black pointer" onClick={this.deleteContact} >Delete</p>
          </div>
           <h2 className='f5 courier'>{`${firstName} ${lastName}`}</h2>
          <img alt='Robots' className='br-100 bg-dark-gray' src={`https://robohash.org/${firstName}?size=150x150`}  onClick={this.openModal}/>
          <div className='pt2'>
            <p className='f5'>{email}</p>
            <p className='f5'>{phoneNumber}</p>
          </div>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <div className='bg-light-gray'>
              <label className="db fw6 lh-copy f6" htmlFor="email-address">First Name</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={firstName} onChange={this.onFirstNameChange} type="email" name="email-address"  id="email-address" />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Last Name</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={lastName} onChange={this.onLastNameChange} type="email" name="email-address"  id="email-address" />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={email} onChange={this.onEmailChange} type="email" name="email-address"  id="email-address" />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Phone Number</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={phoneNumber} onChange={this.onPhoneNumberChange} type="email" name="email-address"  id="email-address" />
            </div>
            <div className="bg-light-gray">
              <p className="b ph3 pv1 mv2 input-reset ba b--black bg-white grow pointer f6 dib" onClick={this.editContact}>Save Changes</p>
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Card;