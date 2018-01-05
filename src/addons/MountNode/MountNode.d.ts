import * as React from 'react';

export interface MountNodeProps {
  [key: string]: any;

  /** Additional classes. */
  className?: string;
}

declare class MountNode extends React.Component<MountNodeProps, {}> {
}

export default MountNode;
