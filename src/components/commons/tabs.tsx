import { Link } from 'react-router-dom';
import classnames from 'classnames';
import React from 'react';
import { TabType } from 'types';

import './__styles__/tabs.scss';

interface Props {
  tabslist?: TabType[];
  currentPageUrl: string;
};

export const ContainerTabs: React.FC<Props> = ({ tabslist, currentPageUrl }) => {
  return (
    <div className="tabs">
      {tabslist?.map(({ name, url }, index) => 
        <Link
          className={classnames('tab', {'active': currentPageUrl === url})}
          to={url}
          id={name}
          key={index}>
            {name} 
        </Link>

        )}
  </div>
  );
};
