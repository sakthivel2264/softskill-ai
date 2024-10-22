import React from 'react';
import Header from './header';
import Course from './course';
import { Button } from './ui/button';
import Link from 'next/link';
import Footer from './footer';

interface AssessmentProps {
  courseroute: string;
}

const Assessment: React.FC<AssessmentProps> = ({ courseroute }) => {
  return (
    <div>
      <Header/>
      <div>
        <Course courseroute={`${courseroute}`}/>
      </div>
      <div className='m-4 flex justify-end mb-20'>
        <Link href={`/course/${courseroute}/${courseroute}test`}>
        <Button>Take Test</Button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Assessment;
