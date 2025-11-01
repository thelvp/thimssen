import type { PropsWithChildren } from 'react';

export const ContentLayout = ({ children }: PropsWithChildren<{}>) => {
  return <div className="h-screen">{children}</div>;
};
