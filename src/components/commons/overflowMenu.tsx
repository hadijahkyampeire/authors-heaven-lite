import React from "react";
import { OverflowMenu, OverflowMenuItem } from "carbon-components-react";

import './__styles__/overflowMenu.scss';

interface Props {
  options: any; 
}
export const OverFlowMenu: React.FC<Props> = ({ options }) => {
  return (
    <OverflowMenu
      data-floating-menu-container
      direction='top'
    >
      {options.map((option: any) => 
        <OverflowMenuItem
          key={option.text}
          className={option.text}
          itemText={option.text}
          onClick={option.onClick}
          disabled={option.disabled}
        />
        )}
    </OverflowMenu>
  );
};
