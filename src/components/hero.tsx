

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, TrendingUp, Zap } from "lucide-react"
import Link from "next/link"
import Header from "./header"
import Footer from "./footer"

export default function Hero() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Enhance Your Soft Skills with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost your career with personalized soft skill training powered by advanced AI technology.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/course">
                <Button>Get Started</Button>
                </Link>
                
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>AI-Powered Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Receive instant, personalized feedback on your soft skills from our advanced AI system.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BookOpen className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Interactive Exercises Using AI</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Engage in realistic scenarios and exercises designed to improve your soft skills effectively.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 mb-2 text-primary" />
                  <CardTitle>Progress Tracking By Results</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Monitor your improvement over time with detailed analytics and progress reports.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Sarah J.</CardTitle>
                  <CardDescription>Marketing Manager</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;SoftSkill AI has significantly improved my communication skills. The personalized feedback is
                    invaluable!&quot;
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Michael T.</CardTitle>
                  <CardDescription>Software Developer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500 dark:text-gray-400">
                    &quot;As a developer, I never thought I&apos;d find a platform that could effectively improve my soft skills.
                    SoftSkill AI proved me wrong!&quot;
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
      </main>
      <Footer/>
    </div>
  )
}