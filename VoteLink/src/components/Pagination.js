import React from 'react'
import { connect } from 'react-redux';
import { changePageAction } from '../actions';

const Pagination = ({
  options,
  links,
  changePage
}) => {
  if (!links || !links.length) {
    return null;
  }

  const page = options.page;
  const pageCount = Math.ceil(links.length / options.itemPerPage);

  if (pageCount === 1) {
    return null;
  }

  const pageArray = Array.from({ length: pageCount }, (v, k) => k + 1);

  return (
    <div className='pagination'>
      {page !== 1 && 
        <>
          <div onClick={() => changePage(1)}>&#60;&#60;</div>
          <div onClick={() => changePage(Math.max(page-1, 1))}>&#60;</div>
        </>
      }
      
      {pageArray.map((num, index) =>
        <div key={index} className={'item' + (num === page ? ' active' : '')} onClick={() => changePage(num)}>{num}</div>
      )}

      {page !== pageCount &&
        <>
          <div onClick={() => changePage(Math.min(page+1, pageCount))}>&#62;</div>
          <div onClick={() => changePage(pageCount)}>&#62;&#62;</div>
        </>
      }
    </div>
  )
}

const mapDispatchToProps = ({
  changePage: changePageAction
});


export default connect(null, mapDispatchToProps)(Pagination);
