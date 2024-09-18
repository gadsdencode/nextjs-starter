// app/layouts/ServerSideLayout.tsx
import React from 'react';
import CopilotWrapper from '../client-wrappers/CopilotWrapper';

interface ServerSideLayoutProps {
  children: React.ReactNode;
}

export default function ServerSideLayout({ children }: ServerSideLayoutProps) {
  const runtimeUrl = process.env.NEXT_PUBLIC_COPILOT_RUNTIME_URL || "/api/copilot";

  return (
    <CopilotWrapper runtimeUrl={runtimeUrl}>
      {children}
    </CopilotWrapper>
  );
}
