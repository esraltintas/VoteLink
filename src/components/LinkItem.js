import React from 'react'
import { connect } from 'react-redux';
import { upVoteLinkAction,  downVoteLinkAction, deleteLinkAction } from '../actions';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css'

const PointBox = ({
  link,
  doUpvoteLink,
  doDownvoteLink,
  doDeleteLink
}) => {

  const deleteLinkItem = (link) => {
    confirmAlert({
      title: 'Remove Link',
      message: 'Do you want to remove ' + link.name + '?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => {
            doDeleteLink(link.id);
            toast.success(link.name.toUpperCase() + " Deleted", {
              position: toast.POSITION.BOTTOM_RIGHT,
              hideProgressBar: true
            });
          }
        },
        {
          label: 'No',
          onClick: () => {}
        }
      ]
    })
  }

  return (
    <div className='pointBox'>
      <div className='point'>
        <span className='pointNumber'>{link.upvote - link.downvote}</span>
        <span>Points</span>
      </div>
      <div className='linkVote'>
        <div className='link'>
          <span className='linkName'>{link.name}</span>
          <span className='url'>({link.url})</span>
        </div>
        <div className='upDownVote'>
          <span className='upVote' onClick={() => doUpvoteLink(link.id)}>&#8593; Up Vote</span>
          <span className='downVote' onClick={() => doDownvoteLink(link.id)}>&#8595; Down Vote</span>
        </div>
      </div>
      <div className='delete' onClick={() => deleteLinkItem(link)}>X</div>
    </div>

  )
}

const mapDispatchToProps = ({
  doUpvoteLink: upVoteLinkAction,
  doDownvoteLink: downVoteLinkAction,
  doDeleteLink: deleteLinkAction
});

export default connect(null, mapDispatchToProps)(PointBox);
