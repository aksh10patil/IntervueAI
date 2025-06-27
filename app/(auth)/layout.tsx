// app/(auth)/layout.tsx or wherever you use this
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();

  // 🚫 If authenticated, don't show this layout (redirect to home)
  if (isUserAuthenticated) {
    redirect('/');
  }

  return (
    <div className="auth-layout">
      {children}
    </div>
  );
};

export default AuthLayout;
