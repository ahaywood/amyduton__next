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
            href="https://reactsummit.us/?_gl=1*14o1y10*_gcl_au*MzE0MDk3NTc0LjE3NTg1NjMzOTguMjA3NTcyNjA1Mi4xNzU4NTYzMzk4LjE3NTg1NjM0MDA."
            title="DX vs. UX: The RSC False Dichotomy"
            description={`React Server Components face a unique challenge in the React ecosystem: they're powerful, but they're primarily associated with a single framework. This talk examines the broader industry implications of RSC's current adoption pattern and why the technology's success depends on ecosystem-wide support, not just Next.js implementation. We'll explore the real barriers to RSC adoption—from legacy codebase constraints to the substantial engineering investment required—and why these challenges have created a subtle industry narrative that "RSC might not be worth it." This session provides both a technical assessment of RSC's current capabilities and a strategic view of its role in React's future.`}
            event="React Summit, New York, NY, November 2025"
            cta="Get Tickets"
            upcoming={true}
          />
          <Appearance
            href="https://fitc.ca/event/webu25_ip/"
            title="Beyond The Framework: Rediscovering The Web"
            description="We’re witnessing a fundamental shift in how we think about web development. After decades of working around platform limitations, a new generation of developers is asking: what if we worked with the platform instead? This isn’t just about performance or bundle size—it’s about rediscovering the elegance and intentionality that was always built into the web’s architecture."
            event="Web Unleashed, Toronto, ON, October 2025"
            cta="Get Tickets"
            upcoming={true}
          />
          <Appearance
            href="https://cfe.dev/events/codeword-conf-2025/"
            title="10 Minutes of RSC Truth: What Content Developers Actually Need to Know"
            description="RSC promised better performance and SEO for content sites, but adoption has been slow. We’ll cut through the hype and skepticism to examine what’s working, what isn’t, and what content developers really need to know."
            event="Codeword Conf, September 2025"
            cta="Register for Free"
            upcoming={true}
          />
          <Appearance
            href="https://squiggleconf.com/"
            title="JavaScript Framework Cage Match"
            description="I built out the same project in 5 different frameworks: RedwoodJS, NextJS App Router, NextJS Pages Router, Astro, Remix, and SvelteKit. Which JavaScript framework is “the best”? Well, it depends, of course!"
            event="Squiggle Conf, Boston, MA, September 2025"
            cta=""
            upcoming={false}
          />
          <Appearance
            href="https://2024.connect.tech/"
            title="Staying Human in the Age of AI: What Tech Leaders Need to Preserve"
            description="While AI tools excel at generating code, they can't navigate the human complexities that make or break technical decisions. As senior engineers, our value increasingly lies not in what we code, but in how we lead teams through technical choices that reflect our values and culture. Through real examples of how values conflicts disguise themselves as technical disagreements, this session explores what tech leaders need to preserve and strengthen as AI reshapes our industry. You'll discover practical tools for uncovering team values and learn to make technical decisions that account for both code and culture in an AI-driven world."
            event="TechLead, September 2025"
            cta=""
            upcoming={false}
          />
          <Appearance
            href="https://2024.connect.tech/"
            title="JavaScript Framework Cage Match"
            description="Over the past year, I built the same SaaS application six different ways: on Next.js Pages Router, Next.js App Router, Remix, RedwoodJS, Astro, and SvelteKit. These frameworks represent a diverse range of options based on different architectural patterns and development philosophies. The primary objective of this project was to document and evaluate the unique features and approaches each framework offers. This talk will showcase valuable insights for developers, businesses, and decision-makers seeking the most suitable framework for their SaaS projects."
            event="Connect.Tech in Atlanta, GA, November 2024"
            cta=""
            upcoming={false}
          />
          <Appearance
            href="https://momentumdevcon.com/"
            title="JavaScript Framework Cage Match"
            description="Over the past year, I built the same SaaS application six different ways: on Next.js Pages Router, Next.js App Router, Remix, RedwoodJS, Astro, and SvelteKit. These frameworks represent a diverse range of options based on different architectural patterns and development philosophies. The primary objective of this project was to document and evaluate the unique features and approaches each framework offers. This talk will showcase valuable insights for developers, businesses, and decision-makers seeking the most suitable framework for their SaaS projects."
            event="Momentum in Cincinnati, October 2024"
            cta=""
            upcoming={false}
          />
          <Appearance
            href="https://frontendnation.com/"
            title="The Future of Frontend"
            description="Catch up with the Compressed.fm Podcast hosts and discover their views on the future of frontend, including takes on the latest trends, upcoming changes, proposals and so much more for the frontend ecosystem!"
            event="Frontend Nation, June 2024"
            cta="Get Tickets"
            upcoming={false}
          />
          <Appearance
            href="https://www.youtube.com/watch?v=Aa8fSQyfho8"
            title="RedwoodJS, now with React Server Components!"
            description="RedwoodJS, the full-stack, open source, React web application framework, has adopted React Server Components in a major architectural shift. By combining the strengths of SSR, streaming, Suspense, RSCs, and Server Actions, we have created a new version of Redwood that is both simpler and more capable. In this talk I will share the lessons we learned in implementing RSCs on top of Vite, and dig into how Redwood’s approach to RSCs differs from Next.js. Come see how we make data fetching (both client- and server-side) trivial with our unique Cell pattern, how to execute server functions from the client, and how our routes file makes complex URLs easy to manage. I will also reveal our roadmap and future innovations you can expect from the framework!"
            event="React Conf, May 2024"
            cta="Watch the Video"
            upcoming={false}
          />
          <Appearance
            href="https://www.postman.com/postcon/"
            title="Compressed.fm at Post Con"
            description="As a co-host of Compressed.fm we conducted several live interviews."
            event="Post Con, April 2024"
            cta=""
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
