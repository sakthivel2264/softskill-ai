/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React from 'react'
import { useParams } from 'next/navigation'
import Test from '@/components/test';

const page = () => {
  const { testroute }= useParams();

  return (
    <div>
      <Test courseroute={`${testroute}`}/>
    </div>
  )
}

export default page