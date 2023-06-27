import './globals.css'
import { Nunito_Sans } from 'next/font/google'
import clsx from 'clsx'
import SideBar from '@/components/SideBar'

const nunito_sans = Nunito_Sans({ subsets: ['latin' ]});

export const metadata = {
  title: 'Brian Rigoni | Full Stack Developer',
  author: 'Brian Rigoni',
  keywords: 'Brian Rigoni, Full Stack Developer, Web Development, App Development, Portfolio, Typescript, React, React Native, Next.js, Nextjs, React.js, Python',
  description: 'Brian Rigoni is a professional full-stack developer. Check out his portfolio and more about his experience in web and app development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx("text-black bg-white dark:text-white dark:bg-[#0F0F0F]", nunito_sans.className)}
    >
      <body className="antialiased flex flex-col md:flex-row gap-8 mt-8 md:mt-20 lg:mt-32 px-8 md:px-16">
        <SideBar />
        <main className="flex-auto flex flex-col">
          {children}
        </main>
      </body>
    </html>
  )
}
