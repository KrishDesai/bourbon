'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';


interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: '',
      title: '',
      openInNewTab: true
    }
  ]

  const getLogo = () => (
    <Link href="/" className="pointer flex items-center">
      <Typography className="!text-white !text-xl font-bold">
        <b>Bourbon.</b>
      </Typography>
    </Link>
  )

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      {/* Show UserButton when signed in */}
      <SignedIn>
        <UserButton />
      </SignedIn>
  
      {/* Show Sign In button when signed out */}
      <SignedOut>
        <SignInButton>
          <Button size="tiny" color="ghost">
            <Link href="/dashboard">
            <Typography variant="p" className="text-black">
              Log In / Sign Up
            </Typography>
            </Link>
          </Button>
        </SignInButton>
      </SignedOut>
    </div>
  );
  

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-black bg-opacity-50 backdrop-filter backdrop-blur-md shadow-lg rounded-lg mx-auto max-w-[90%] md:max-w-[70%] lg:max-w-[60%] p-4 mt-4">
        <div className="w-full">
          <div className="flex items-center justify-between h-">
            {/* Logo */}
            <div className="flex-shrink-0">
              {getLogo()}
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-x-8">
              {getHeaderItems()}
              {getAuthButtons()}
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
              {getAuthButtons()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}