/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import Link from 'next/link';
import { useStringStore } from '@/store/useZustand';
import { Loader } from 'lucide-react';


// Define the Course component
const Test: React.FC<{ courseroute: string }> = ({ courseroute }) => {
  const [course, setCourse] = useState(null);
  const [testMarks, setTestMarks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const [results, setResults] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [inputText, setInputText] = useState<string>("");
  const { setValue } = useStringStore();
  

  // Function to call the Gemini AI API
  const fetchCourseContent = async (course: string) => {
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
                  text: `Generate a minimum of 10 Questions with choice of maximum 4 choices for Test on the topic: ${course} "Never give Answers for the questions" `,
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
    if (courseroute) {
      fetchCourseContent(courseroute); // Fetch course content when the component mounts or when courseroute changes
    }
  }, [courseroute]);

  useEffect(()=>{
    if(testMarks){
      setValue(testMarks);
    }
  }, [testMarks, setValue])

  if (loading) return <div><Header/><div className='min-h-screen text-center mt-12'>Generating Test Questions...</div><Footer/></div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>No data available.</div>;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted Data:", inputText);
    setButtonLoading(true);
    
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
                  text: `Evaluate the answers ${inputText} with this Questions ${course} and give marks and also check whether the submitted answer count is same as question count and validate marks accordingly, then give correct answers and expalinations of each questions`,
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

      setTestMarks(AItext);

      if(response.ok){
        setResults(true);
      }
       
    } catch (error: any) {
      console.error('Error fetching course content:', error);
      setError(error.message || 'An unexpected error occurred');
    } finally {
      setButtonLoading(false); // Set loading to false after fetching
    }
    setInputText("");
  };

  return (
    <div className="p-4 px-8">
      <Header/>
      <h1 className='my-4 text-center text-xl font-bold underline'>Assessment Test for {courseroute}</h1>
      <div>
        <p className="text-lg mb-4">{course}</p>
      </div>
      <div className='mb-20'>
      <form onSubmit={handleSubmit} className="space-y-4">
      <Textarea 
        value={inputText}
        onChange={(e) => setInputText(e.target.value)} 
        placeholder="Enter your Answers here..." 
        className="w-full h-32 p-2 border rounded-md"
      />
      <div className='flex flex-row gap-2 justify-between mb-2'>
      <Button
        type='submit'
        variant="default"
        disabled={loading}
        className="p-2"
          >
        {buttonLoading ? (
          <Loader className="animate-spin" />
            ) : "Submit"}
         </Button>
      {
      results?
      <Link href={`/course/${courseroute}/${courseroute}test/${courseroute}results`}>
      <Button>
        Results
      </Button>
      </Link>:
      <div></div> 
      }
      </div>
    </form>
      </div>
      <Footer/>
    </div>
  );
};

export default Test;
