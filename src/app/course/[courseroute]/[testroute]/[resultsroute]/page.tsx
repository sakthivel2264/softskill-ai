/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Results from '@/components/results';

const page = () => {
  const { resultsroute } = useParams();
  return (
    <div>
      <Results resultsroute={`${resultsroute}`}/>
    </div>
  )
}

export default page