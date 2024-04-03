import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-pink-500 dark:text-zinc-200 dark:hover:text-pink-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-pink-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Amy Dutton. I live at the intersection of design and development.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Amy Dutton. I live at the intersection of design & development.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I currently live outside of Nashville with my husband and our
              three adorable (if I do say so myself) kids: Isaac (9), Adele (8),
              and Emma (6). As if things weren’t exciting enough, we also
              adopted a retired racing greyhound and a King Charles Cavalier
              Spaniel.
            </p>{' '}
            <p>
              If I’m not sitting front of my computer, I’m hanging out with
              friends and family, binging on Netflix / Hulu / Prime / Disney+ /
              AppleTV (all the streaming!), playing Settlers or Nertz, or
              reading and drinking coffee.
            </p>
            <h2 className="mb-4 mt-20 text-xl font-bold leading-loose text-white">
              Short Story Long
            </h2>
            <p>
              When I was in 8th grade, I built my first website, using Netscape
              Navigator’s web tools. I decided it would be a good idea to pull
              all the animated gifs on the Internet and put them in one central
              location. With so many animated images, my site was enough to give
              anyone a seizure. Let’s not even talk about file size and load
              times. But, I like to believe that I was before my time. Curated
              content and animated gifs anyone? Sounds like today’s{' '}
              <a
                href="https://giphy.com"
                className="font-bold text-pink-400 underline"
              >
                Giphy!
              </a>{' '}
              -- And I still have a soft spot in my heart for{' '}
              <a
                href="https://giphy.com/gifs/rick-roll-g7GKcSzwQfugw"
                className="font-bold text-pink-400 underline"
              >
                a good animated gif.
              </a>
            </p>
            <p>
              I graduated from college in 2006 from{' '}
              <a
                href="https://mtsu.edu"
                className="font-bold text-pink-400 underline"
              >
                Middle Tennessee State University
              </a>{' '}
              with a degree in Radio / TV Broadcasting and a concentration in
              Animation.
            </p>
            <p>
              After college, I went and worked for a web company on Music Row
              (in Nashville, TN) called echo (owned by{' '}
              <a
                href="https://ticketmaster.com"
                className="font-bold text-pink-400 underline"
              >
                Ticketmaster
              </a>
              ). We built websites for artists and entertainers. It’s still fun
              to name drop in conversations. (*Cough* Janet Jackson, Taylor
              Swift, Kelly Clarkson, Counting Crows, Ice Cube, and Kanye West —
              just to name a few). I worked there for a year, before going to{' '}
              <a
                href="https://lifeway.com"
                className="font-bold text-pink-400 underline"
              >
                LifeWay
              </a>
              . It was a good thing, too, because two months after I left,
              Ticketmaster dissolved echo.
            </p>
            <p>
              I worked at LifeWay for four years in the Training and Events
              Production department. We did print, web, and video support for
              all the various events LifeWay produces across the country. I was
              an art director, serving five different departments, ranging in
              demographics from young children to senior adults.
            </p>
            <p>
              In January 2013, I left LifeWay to run my own agency, Ah Ha
              Creative. For six and a half years, I had the privilege of
              partnering with a variety of clients and creative agencies to make
              some really cool projects.
            </p>
            <p>
              In July 2019, I joined{' '}
              <a
                href="https://codingzeal.com"
                className="font-bold text-pink-400 underline"
              >
                ZEAL
              </a>
              ’s team as a Senior UI/UX Designer and Frontend Developer.
              Eventually, I was promoted to Director of Design where I led a
              team of product designers and frontend engineers.
            </p>
            <p>
              That brings us to now. In June 2023, I joined{' '}
              <a
                href="https://prestonwernerventures.com/"
                className="font-bold text-pink-400 underline"
              >
                Preston-Werner Ventures
              </a>{' '}
              where I server as a lead maintainer on the{' '}
              <a
                href="https://redwoodjs.com"
                className="font-bold text-pink-400 underline"
              >
                RedwoodJS Core Team
              </a>
              .
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/selfteachme" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://youtube.com/c/selfteachme"
              icon={YouTubeIcon}
              className="mt-4"
            >
              Subscribe on YouTube
            </SocialLink>
            <SocialLink
              href="https://github.com/ahaywood"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/amy-dutton"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:amy@selfteach.me"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              amy@selfteach.me
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
