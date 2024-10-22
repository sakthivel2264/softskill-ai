/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect, useState } from 'react';
import Header from './header'
import Footer from './footer'
import { useStringStore } from '@/store/useZustand';

const Results: React.FC<{ resultsroute: string }> = ({resultsroute}) => {

  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { value } = useStringStore();
  

  // Function to call the Gemini AI API
  const fetchCourseContent = async () => {
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Using this ${value} data give a feedback and marks and tips to improve`,
                },
              ],
            },
          ],
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch course content from Gemini: ${response.statusText}`);
      }

      const courseContent = await response.json();
      console.log(courseContent)
      const AItext = courseContent.candidates[0].content.parts[0].text;

      setCourse(AItext); // Update course state
    } catch (error: any) {
      console.error('Error fetching course content:', error);
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    if (resultsroute) {
      fetchCourseContent(); // Fetch course content when the component mounts or when courseroute changes
    }
  }, [resultsroute]);

  if (loading) return <div><Header/><div className='min-h-screen text-center mt-12'>Generating Results and FeedBack...</div><Footer/></div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>No data available.</div>;

  return (
    <div>
      <Header/>
      <h1 className='my-4 text-center text-xl font-bold underline'>Results</h1>
      <div className='min-h-screen m-8'>
        {course}
      </div>
      <Footer/>
    </div>
  )
}

export default Results