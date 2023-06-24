import Image from 'next/image';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import avatar from './avatar.jpg';


export default function Home() {
  return (
    <section>
      <h1 className="text-3xl font-serif font-bold">Ariel Rigoni</h1>
      <p className="my-5 max-w-md text-neutral-800 dark:text-neutral-200">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex md:flex-row items-center my-5">
        <Image
          className="rounded-full"
          src={avatar}
          alt="avatar"
          width={100}
          priority
        />
        <div className="ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <FaLinkedin size={24} />
          <FaGithub size={24} />
          <FaInstagram size={24} />
        </div>
      </div>
      <p className="my-5 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquam ex id leo mattis, ut consequat mi pellentesque. Fusce eleifend ex vitae lacinia tincidunt. Curabitur congue enim nec mauris rutrum, ut pulvinar justo aliquet. Duis consequat sem a purus dapibus, ac fringilla velit luctus. Nam eu metus elit.
      </p>
    </section>
  )
}
