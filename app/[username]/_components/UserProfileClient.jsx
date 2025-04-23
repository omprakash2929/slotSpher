
'use client';
import { useEffect, useRef } from 'react';
import  useFetch  from '@/hooks/use-fetch';
import {  PageViewCount } from '@/actions/pageView';

export default function UserProfileClient({ username }) {
    const { fn: pageView, loading, error,data } = useFetch(PageViewCount);
    const hasCountedRef = useRef(false);

    useEffect(() => {
        if (username && !hasCountedRef.current) {
            pageView(username);
            hasCountedRef.current = true;
          }
    }, [username,pageView]);

  return (
    <div>
      {loading && <p>Counting view...</p>}
      {error && <p className="text-red-500">Error: {error.message}</p>}
      {data && <p>{data.views}</p>}
    </div>
  );
}
