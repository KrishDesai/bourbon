import { Button } from '@/components/ui/button'
import Typography from '@/components/ui/typography'
import Image from 'next/image'
import Feature from './feature'
import { Laptop, Rewind, AlarmClock } from 'lucide-react'
import Link from 'next/link'


export default function Home() {
  return (
    <div
      className="flex flex-col h-full md:py-18 md:px-32 pt-11 pb-24 px-8
        w-full items-center text-center gap-12"
    >
      <div className="flex flex-col gap-6 items-center">
        <Typography className="max-w-2xl" variant="h1">
         View Cornell syllabi to make the right choice during course selection!
        </Typography>
        <Typography className="max-w-2xl" variant="h5">
         <b> No more CourseHero. No more Class Roster. </b> <br />
          View syllabi on the go with Bourbon. 
        </Typography>
          <Link href = "/dashboard">
          <Button size="tiny" variant="ghost">
            Get Started
          </Button>
        </Link>
        <Image
          width={1024}
          height={632}
          alt="Bourbon Dashboard"
          src="/hero1.png"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col md:pt-20 md:gap-36 gap-24 items-center">
        <div className="flex flex-col gap-12 items-center">
          <Typography className="max-w-2xl" variant="h1">
            Why Bourbon?
          </Typography>
          <div className="flex md:flex-row flex-col gap-8 items-center">
          <Feature  
              icon={
              <Rewind size={24} color="white" />
              }
            headline="No Viewing Old Rosters"
            description="Save time by not going through old class rosters to see if a syllabus is there."
             />
            <Feature
              icon={
              <Laptop size={24} color="white" />
              }
              headline="All Syllabi in One Place"
              description="No need to scavenge the internet to find old syllabi on sites like CourseHero."
             />
            <Feature
              icon={
              <AlarmClock size={24} color="white" />
            }
            headline="No Workload Suprises"
            description="See how many assignments, readings and exams per class before selecting classes."
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 items-center">
          <Typography className="max-w-2xl" variant="h1">
            This Project is Open-Source!
          </Typography>
          <div>Help build this project further by contributing below.</div>
          <Link
            href="https://github.com/KrishDesai/bourbon."
            target="_blank"
          >
            <Button size="tiny" variant="ghost">
              GitHub Repo
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
