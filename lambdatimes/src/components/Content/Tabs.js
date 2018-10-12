import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  console.log(props);
  return (
    
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* <Tab tab={props.tab} /> */}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {/* {props.tabs.map(tab => {
              return (
                <Tab
                  key={tab}
                  tab={tab}
                  selectTabHandler={tab.selectTabHandler}
                  selectedTab={tab.selectedTab}
                  />
              ) // end of inner return
            }) // end of map

            } */}
      </div>
    </div>
  );  // end of outer return
};

// Make sure to use PropTypes to validate your types!

// Tabs.propTypes = {
//   card: PropTypes.shape({
//     headline: PropTypes.string.isRequired,
//     img: PropTypes.string.isRequired,
//     author: PropTypes.string.isRequired,
//   })
// }

export default Tabs;
