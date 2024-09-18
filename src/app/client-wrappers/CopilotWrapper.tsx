// app/components/CopilotWrapper.tsx
"use client";

import React from 'react';
import { CopilotKit } from "@copilotkit/react-core";
import { CopilotSidebar } from "@copilotkit/react-ui";

interface CopilotWrapperProps {
  children: React.ReactNode;
  runtimeUrl: string;
}

export default function CopilotWrapper({ children, runtimeUrl }: CopilotWrapperProps) {
  return (
    <CopilotKit runtimeUrl={runtimeUrl}>
      <CopilotSidebar>
        {children}
      </CopilotSidebar>
    </CopilotKit>
  );
}
