import React from 'react';
import Popup from "reactjs-popup";
import axios from 'axios';

class Card extends React.Component {
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

deleteContact = () => {
		console.log(this.state);
    const {pullContacts} = this.props;
    const id = this.props.id;
    console.log(id);
		axios.post('http://localhost:4000/contacts/delete', {_id: id})
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
    const { name, email, testClickFunction} = this.props;
    return (
      <div className='dib'>
        <div className='tc bg-light-gray dib br3 pa3 ma2 shadow-5 o-90'>
          <div className='flex justify-center'>
            <p className="f6 link dim br3 ba ph3 db black pointer" onClick={testClickFunction} >Delete</p>
          </div>
           <h2 className='f5 courier'>{name}</h2>
          <img alt='Robots' className='br-100 bg-dark-gray' src={`https://robohash.org/${name}?size=150x150`}  onClick={this.openModal}/>
          <div className='pt2'>
            <p className='f6'>{email}</p>
          </div>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <div className='bg-light-gray'>
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={name} type="email" name="email-address"  id="email-address" />
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-white w-75 center" defaultValue={email} type="email" name="email-address"  id="email-address" />
            </div>
            <div className="bg-light-gray">
              <input className="b ph3 pv1 mv2 input-reset ba b--black bg-white grow pointer f6 dib" type="submit" value="Save" />
            </div>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Card;