import { type Metadata } from 'next'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof Section>) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({
  title,
  description,
  event,
  cta,
  href,
  upcoming = false,
}: {
  title: string
  description: string
  event: string
  cta: string
  href: string
  upcoming?: boolean
}) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href} upcoming={upcoming}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      {cta && <Card.Cta>{cta}</Card.Cta>}
    </Card>
  )
}

export const metadata: Metadata = {
  title: 'Speaking',
  description:
    'I’ve spoken at several conferences all over the world and guested on several podcasts.',
}

export default function Speaking() {
  return (
    <SimpleLayout
      title="I’ve spoken at several conferences all over the world and guested on several podcasts."
      intro="Throughout the years, I've had several people in invest in me and my career. I want to give back by sharing my knowledge and experiences with others."
    >
      <div className="space-y-20">
        <SpeakingSection title="Conferences">
          <Appearance
            href="https://conf.react.dev/"
            title="RedwoodJS, now with React Server Components!"
            description="RedwoodJS, the full-stack, open source, React web application framework, has adopted React Server Components in a major architectural shift. By combining the strengths of SSR, streaming, Suspense, RSCs, and Server Actions, we have created a new version of Redwood that is both simpler and more capable. In this talk I will share the lessons we learned in implementing RSCs on top of Vite, and dig into how Redwood’s approach to RSCs differs from Next.js. Come see how we make data fetching (both client- and server-side) trivial with our unique Cell pattern, how to execute server functions from the client, and how our routes file makes complex URLs easy to manage. I will also reveal our roadmap and future innovations you can expect from the framework!"
            event="React Conf, May 2024"
            cta="Get Tickets"
            upcoming={true}
          />
          <Appearance
            href="https://www.postman.com/postcon/"
            title="Compressed.fm at Post Con"
            description="As a co-host of Compressed.fm we conducted several live interviews."
            event="Post Con, April 2024"
            cta="Get Tickets"
            upcoming={false}
          />
          <Appearance
            href="https://thatconference.com/"
            title="Emcee at THAT Conference, January 2024"
            description="As a co-host of Compressed.fm we hosted the online portion of the conference, interviewing speakers and facilitating panel discussions."
            event="THAT Conference 2023"
            cta="Watch video"
          />
          <Appearance
            href="https://www.redwoodjsconf.com/"
            title="Design-Driven Development with Storybook"
            description="Storybook facilitates the creation, documentation, and testing of UI components in isolation, enabling rapid iteration and development of design systems."
            event="RedwoodJS Conference, September 2023"
            cta=""
          />
          <Appearance
            href="https://thatconference.com/"
            title="Compressed.fm LIVE at THAT Conference"
            description=""
            event="THAT Conference, January 2023"
            cta=""
          />
          <Appearance
            href=""
            title="Compressed.fm LIVE at Modern Frontend Live"
            description=""
            event="Modern Frontend Live in London, November 2022"
            cta=""
          />
          <Appearance
            href="https://www.youtube.com/watch?v=WrqoANCpA7w"
            title="Pulling Back the Curtain on Compressed.fm"
            description="Amy Dutton pulls the curtain back on how her podcast, Compressed.fm, is built on both the frontend and backend."
            event="JAMStack Conf, November 2022"
            cta="Watch the Video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=quNLtK7hWYs"
            title="How Next.js and Prisma Make Frontend Developers Full-Stack"
            description="Backend technology is often elusive and an obstacle for frontend developers. The strategic pairing (Frontend to Fullstack), however, is where the magic happens. A solid backend makes the frontend “smart” and truly shine. Tooling, like Next.js and Prisma, helps developers leverage full-stack capabilities, allowing teams to build faster and more efficiently, connecting critical front and backend user experiences."
            event="Next.js Conf, November 2022"
            cta="Watch the Video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=_zJ44wmo1Ro"
            title="How Redwood and Prisma Make Frontend Developers Fullstack"
            description="Backend technology is often elusive and an obstacle for frontend developers. The strategic pairing (Frontend to Fullstack), however, is where the magic happens. A solid backend makes the frontend “smart” and truly shine. Tooling, like Redwood and Prisma, helps developers leverage full-stack capabilities, allowing teams to build faster and more efficiently, connecting critical front and backend user experiences."
            event="Prisma Day in Berlin, June 2022"
            cta="Watch the Video"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=CAxZYwImAqY"
            title="How We Used Next.js to Build our Podcast Dashboard"
            description="Next.js can do it all, so do you understand how all of the functional pieces fit together? Let’s take a technical deep dive into the Compressed.fm website, a real-world dashboard built with Next.js, and the tech stack behind it. This site includes mixed static and server-rendered content, an authenticated dashboard for sponsors, multiple forms, a custom audio player, and much more."
            event="Next.js Conf, November 2021"
            cta="Watch the Video"
          />
        </SpeakingSection>
        <SpeakingSection title="Podcasts">
          <Appearance
            href="https://www.youtube.com/watch?v=APP94mAt8dw"
            title="Building a Dynamic Conference Badge Generator with Cloudinary"
            description="Amy shares her story into tech, her current role in the RedwoodJS core team, and the hands-on creation of the uniquely animated conference badge generator. She describes the challenges she faced and her process of overcoming them, the tech stack she used (including RedwoodJS, Prisma, React, GraphQL, Resend, Cloudinary and more), and provides insightful tips for aspiring developers."
            event="Cloudinary, January 5, 2024"
            cta="Listen to the Podcast"
          />
          <Appearance
            href="https://podrocket.logrocket.com/storybook-design-driven-development-amy-dutton"
            title="Storybook and design-driven development with Amy Dutton"
            description="Amy Dutton, lead maintainer at Redwood.js and web development educator, returns to talk about the oncept of design-driven development, what it looks like in practice, how it benefits companies at large, and how developers can use Storybook to accomplish it."
            event="Pod Rocket, November 7, 2023"
            cta="Listen to the Podcast"
          />
          <Appearance
            href="https://www.youtube.com/watch?v=N3NC2oeR2vY"
            title="Automating Podcast Audio Delivery with Cloudinary, Next.js and Sanity"
            description="Amy Dutton and James Quick host the popular Compressed.fm podcast, with amazing discussions on all things web development and design. To help deliver the episodes, they use Cloudinary’s APIs to customize their audio players and create promotional imagery in very innovative ways."
            event="Cloudinary DevJams, February 21, 2023"
            cta="Watch the Video"
          />
          <Appearance
            href="https://podrocket.logrocket.com/remix-svelte-robots"
            title="Remix, Svelte, and robots with James Quick and Amy Dutton"
            description="James Quick is a developer, speaker, and teacher. Amy Dutton is the Director of Design at Zeal, together they host the Compressed.fm podcast, a weekly podcast about web design and development. Today they join us to talk about what they are excited about in development in 2023."
            event="Pod Rocket, February 10, 2023"
            cta="Listen to the Podcast"
          />
        </SpeakingSection>
      </div>
    </SimpleLayout>
  )
}
