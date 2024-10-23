'use client'
import Link from 'next/link'
import Typography from '@components/ui/typography'

export function Footer() {
  return (
    <footer className="flex h-12 items-center justify-center w-full border-t">
      <div className="w-full max-w-[1280px] md:px-8 px-4 flex place-content-center">
        <div className="gap-x-11 md:flex flex-1 hidden">
          <Link
            href="/"
            className="pointer flex items-center"
          >
            <Typography className="!text-white !text-base font-large font-bold ">
              Bourbon. 
            </Typography>
          </Link>
        </div>
        <div className="flex max-w-fit items-center gap-x-4">
          <Link
            href="https://www.linkedin.com/in/desaikrish/"
            target="_blank"
            className="pointer block w-fit flex-1"
          >
            <Typography variant="p" className="w-max font-bold">
              Krish Desai
            </Typography>
          </Link>
        </div>
      </div>
    </footer>
  )
}