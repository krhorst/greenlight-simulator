import { ReactNode } from 'react';
import Meta, { MetaProps } from '@/components/layout/meta';
import { useRouter } from 'next/router';
import { LoadingDots } from '@/components/icons';


export default function Layout({
  meta,
  children
}: {
    meta: MetaProps;
    children: ReactNode;
    }) {

    const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <LoadingDots color="white" />
      </div>
    );
  }

  return (
    <div className="w-full mx-auto h-screen mb4 overflow-hidden">
      <Meta props={meta} />
          {children}
    </div>
  );
}
