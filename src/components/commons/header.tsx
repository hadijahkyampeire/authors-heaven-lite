import React from 'react';
import { useHistory } from 'react-router';

import { ArrowLeft32 } from '@carbon/icons-react';
import { TooltipDefinition } from 'carbon-components-react';
import './__styles__/header.scss';

interface Props {
  title: string;
  backUrl?: string;
}
export const Header:React.FC<Props> = ({ title }) => {
  const history = useHistory();
  return (
    <div className="app-header">
      <TooltipDefinition tooltipText='Go Back' direction="top">
        <div onClick={history.goBack}><ArrowLeft32 /></div>
      </TooltipDefinition>
      <div className="title">{title}</div>
    </div>
  );
};
