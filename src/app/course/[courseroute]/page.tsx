/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import React from 'react'
import { useParams } from 'next/navigation';
import Assessment from '@/components/assessment';

const page = () => {
  const { courseroute } = useParams();

  return (
    <div>
      <Assessment courseroute={`${courseroute}`}/>
    </div>
  )
}

export default page