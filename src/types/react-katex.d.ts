// Minimal typings for react-katex components
declare module 'react-katex' {
  import * as React from 'react';

  export interface KatexProps {
    math: string;
    errorColor?: string;
    renderError?: (error: Error) => React.ReactNode;
  }

  export const InlineMath: React.FC<KatexProps>;
  export const BlockMath: React.FC<KatexProps>;

  const _default: {
    InlineMath: typeof InlineMath;
    BlockMath: typeof BlockMath;
  };
  export default _default;
}
