import React from 'react';
import { connect } from 'react-redux';
import AddLinkButton from './AddLinkButton'
import SortSelect from './SortSelect'
import LinkItem from './LinkItem'
import Pagination from './Pagination'
import sorter from '../helpers/sorter';
import paginator from '../helpers/paginator';

const Home = ({
  links, options
}) => {
  const sortedLinks = sorter(links, options.sortBy);
  const linksInPage = paginator(sortedLinks, options.page, options.itemPerPage);
  
  return (
    <div>
      <AddLinkButton />
      {!links.length ? null :
        <>
          <SortSelect />

          {linksInPage.map((link, index) =>
            <LinkItem key={index} link={link} />
          )}

          <Pagination
            links={links}
            options={options}
          />  
        </>
      }
      
    </div>
  );
}

const mapStateToProps = state => ({
  links: state.links,
  options: state.options
});

export default connect(mapStateToProps)(Home);