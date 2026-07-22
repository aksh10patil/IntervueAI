'use client';

import dynamic from 'next/dynamic';

const Agent = dynamic(() => import('@/components/Agent'), { ssr: false });

export default function AgentWrapper(props: any) {
    return <Agent {...props} />;
}
