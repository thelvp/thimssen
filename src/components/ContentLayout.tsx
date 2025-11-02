import type { PropsWithChildren } from 'react';

export const ContentLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="container flex h-screen w-full flex-col justify-center text-center md:flex-row">
      {children}
    </div>
  );
};
