import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
// import uuidv4 from 'uuid/v4';
import history from '../history';
import { addLinkAction } from '../actions';

const AddLink = ({ name = '', url = '', doAddLink }) => {
  const nameInput = React.createRef();
  const urlInput = React.createRef();
  const uuidv4 = require('uuid/v4');

  const onSubmit = e => {
    e.preventDefault();

    doAddLink({
      id: uuidv4(),
      name: nameInput.current.value,
      url: urlInput.current.value,  
      upvote: 0,
      downvote: 0,
      createdAt: Date.now(),
      votedAt: Date.now()
    });

    toast.success(nameInput.current.value.toUpperCase() + " Added", {
      position: toast.POSITION.BOTTOM_RIGHT,
      hideProgressBar: true
    });

    history.push('/');
  };

  return (
    <div className="linkVoteMain">
      <div className='returnList'>
        <Link to='/'>&larr; Return to List</Link>
      </div>
      <div className="header">
        <h2>Add New Link</h2>
        <form autoComplete="off" onSubmit={onSubmit}>
          <label htmlFor="linkName">Link Name:</label>
          <input
            id="linkName"
            placeholder="e.g Alphabet"
            ref={nameInput}
            defaultValue={name}
          />
          <label htmlFor="linkURL">Link URL:</label>
          <input
            id="linkURL"
            placeholder="e.g http://abc.dfc"
            ref={urlInput}
            defaultValue={url}
          />
          <button type="submit" className='addLink'>ADD</button>
        </form>
      </div>
    </div>
  )
}

AddLink.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  vote: PropTypes.number
};

const mapDispatchToProps = ({
  doAddLink: addLinkAction
});

export default connect(null, mapDispatchToProps)(AddLink);