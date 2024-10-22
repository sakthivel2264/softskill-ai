import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { Brain } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Brain className="h-6 w-6 mx-1" />
          <p className='font-bold'>SoftSkill AI</p>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 mt-2">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/course">
            Courses
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <div className='-mt-1'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          </div>
          
        </nav>
      </header>
    </div>
  )
}

export default Header