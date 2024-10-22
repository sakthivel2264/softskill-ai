/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';


// Define the Course component
const Course: React.FC<{ courseroute: string }> = ({ courseroute }) => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
                  text: `Generate a Learning Book on the topic: ${course} This learning content should be maximum of 1000 words`,
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

  if (loading) return <div className='min-h-screen text-center mt-12'>Generating Course Content...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!course) return <div>No course data available.</div>;

  return (
    <div className="p-4 px-8">
      <h1 className='my-4 text-xl font-bold underline'>{courseroute} Course</h1>
      <div className='mb-20'>
        <p className="text-lg mb-4">{course}</p>
      </div>
    </div>
  );
};

export default Course;
