import React from 'react';
import Popup from "reactjs-popup";

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

  //toggleModal() {
    //if(this.state.open ===)
  //}

  render() {
    const { name, email, id } = this.props;
    return (
      <div className='dib'>
        <div className = 'tc bg-light-yellow dib br3 pa3 ma2 grow shadow-5'>
          <div className='flex justify-center'>
            <p class="f6 w-15 link dim br3 ba ph3 pv2 mb2 db black pointer">Delete</p>
          </div>
          <img alt = 'Robots' src = {`https://robohash.org/${id}?size=150x150`}  onClick={this.openModal}/>
          <div>
            <h2 className = 'f5'>{name}</h2>
            <p className = 'f6'>{email}</p>
          </div>
        </div>
        <Popup
          open={this.state.open}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close pointer" onClick={this.closeModal}>
              &times;
            </a>
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input className="pa2 input-reset ba bg-transparent w-100" value={name} type="email" name="email-address"  id="email-address" />
            <p className = 'f6'>{email}</p>
          </div>
        </Popup>
      </div>
    );
  }
}

export default Card;