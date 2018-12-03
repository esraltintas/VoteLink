import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeSortingAction } from '../actions';

const SortVote = ({
  changeSortValue
}) => {
  return (
    <div className='sortSelect'>
      <select className="form-control" onChange={e => changeSortValue(e.target.value)}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="most">Most voted (Z -> A)</option>
        <option value="less">Less voted (A -> Z)</option>
      </select>
    </div>
  )
}

SortVote.propTypes = {
  value: PropTypes.string,
};


const mapDispatchToProps =  ({
  changeSortValue: changeSortingAction
});

export default connect(null, mapDispatchToProps)(SortVote);