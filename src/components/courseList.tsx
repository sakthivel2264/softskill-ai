import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import Link from 'next/link'
import { Button } from './ui/button'
import Footer from './footer'

const courses = [
  {
    id: 1,
    courseName: "Softskill Development",
    description: "Learn essential soft skills to boost your career.",
    courseroute:"softskill"
  },
  {
    id: 2,
    courseName: "Leadership Training",
    description: "Develop leadership qualities with AI-powered insights.",
    courseroute:"leadership"
  },
  {
    id: 3,
    courseName: "Communication Skills",
    description: "Improve your communication for both personal and professional growth.",
    courseroute:"communication"
  },
  {
    id: 4,
    courseName: "Problem-Solving Skills",
    description: "Master problem-solving techniques and strategies.",
    courseroute:"problemsolving"
  },
]

const CourseList = async () => {
  const user = await currentUser()

  if (!user) return <div>Sign-Up and Continue</div>

  return (
    <div className="container mx-auto p-8 ">
      <h2 className="text-3xl font-bold mb-6 text-center">Available Courses</h2>
      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-2 mt-12">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.courseName}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{course.description}</CardDescription>
              <div className='m-4 flex flex-row justify-end'>
              <Link href={`/course/${course.courseroute}`}>
              <Button>Enroll</Button>
              </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <Footer/>
    </div>
  )
}

export default CourseList
