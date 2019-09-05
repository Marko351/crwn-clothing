import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directorySelector';
import MenuItem from '../MenuItem/MenuItem';

import './Directory.scss';

const Directory = ({ sections }) => {
  return (
    <div className='directory-menu'>
      {sections.map(section => {
        return (
          <MenuItem
            key={section.id}
            imageUrl={section.imageUrl}
            title={section.title}
            size={section.size}
            url={section.linkUrl}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
