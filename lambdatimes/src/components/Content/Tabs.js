import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types';

const Tabs = props => {
  // console.log(props);
  return (
    
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        {/* <Tab tab={props.tab} /> */}
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props*/}
            {props.tabs.map(tab => {
              return (
                <Tab
                  key={tab}
                  tab={tab}
                  selectTabHandler={props.selectTabHandler}
                  selectedTab={props.selectedTab}
                  />
              ) // end of inner return
            }) // end of map

            }
      </div>
    </div>
  );  // end of outer return
};

// Make sure to use PropTypes to validate your types!

// Tabs.propTypes = {
//   tab: PropTypes.shape({
//     key: PropTypes.string,
//     tab: PropTypes.string,
//     selectTabHandler: PropTypes.func,
//     selectedTab: PropTypes.string,
//   })
// }

export default Tabs;
