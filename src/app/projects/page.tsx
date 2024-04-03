import { type Metadata } from 'next'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

import compressedLogo from '@/images/logos/compressedfm.png'
import redwoodLogo from '@/images/logos/redwoodjs.jpg'
import adventCss21Logo from '@/images/logos/advent-of-css-2021.png'
import adventJs21Logo from '@/images/logos/advent-of-js-2021.png'
import adventCss23Logo from '@/images/logos/advent-of-css-2023.png'
import adventJs23Logo from '@/images/logos/advent-of-js-2023.png'
import figmaLogo from '@/images/logos/figma.png'
import svelteLogo from '@/images/logos/svelte.png'
import twoWeekBuildLogo from '@/images/logos/two-week-build.png'

const projects = [
  {
    name: 'Compressed.fm',
    description:
      'A podcast all about web design and development with a little bit of zest.',
    link: { href: 'https://compressed.fm', label: 'compressed.fm' },
    logo: compressedLogo,
  },
  {
    name: 'Conference Badge Application',
    description: 'A badge application for the RedwoodJS conference.',
    link: {
      href: 'https://ticket.redwoodjs.com/',
      label: 'ticket.redwoodjs.com',
    },
    logo: redwoodLogo,
  },
  {
    name: 'Advent of CSS (2021)',
    description: '24 CSS Challenges for the Season',
    link: {
      href: 'https://2021.adventofcss.com',
      label: '2021.adventofcss.com',
    },
    logo: adventCss21Logo,
  },
  {
    name: 'Advent of JS (2021)',
    description: '24 JavaScript Challenges for the Season',
    link: { href: 'https://2021.adventofjs.com', label: '2021.adventofjs.com' },
    logo: adventJs21Logo,
  },
  {
    name: 'Two Week Build',
    description: '24 CSS Challenges for the Season.',
    link: { href: 'https://twoweekbuild.com', label: 'twoweekbuild.com' },
    logo: twoWeekBuildLogo,
  },
  {
    name: 'RedwoodJS',
    description: 'Redwood is the full-stack JavaScript application framework.',
    link: { href: 'https://redwoodjs.com', label: 'redwoodjs.com' },
    logo: redwoodLogo,
  },
  {
    name: 'Advent of CSS (2023)',
    description: '24 CSS Challenges for the Season.',
    link: { href: 'https://adventofcss.com', label: 'adventofcss.com' },
    logo: adventCss23Logo,
  },
  {
    name: 'Advent of JavaScript (2023)',
    description: '24 JavaScript Challenges for the Season.',
    link: { href: 'https://adventofjs.com', label: 'adventofjs.com' },
    logo: adventJs23Logo,
  },
  // {
  //   name: 'Everything Svelte',
  //   description:
  //     '🚧 WIP: Everything you need to know to build a modern web application in Svelte.',
  //   link: {
  //     href: 'https://everythingsvelte.com',
  //     label: 'everythingsvelte.com',
  //   },
  //   logo: svelteLogo,
  // },
  // {
  //   name: 'Figma for Devs',
  //   description:
  //     '🚧 WIP: Email based course, teaching developers how to be productive within Figma.',
  //   link: { href: 'https://figmafordevs.com', label: 'figmafordevs.com' },
  //   logo: figmaLogo,
  // },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'My creative outlet.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="My creative outlet."
      intro="I’ve worked on hundreds of websites and applications throughout my career. These are a few personal projects that have been my creative outlet."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt=""
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href}>{project.name}</Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-pink-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
