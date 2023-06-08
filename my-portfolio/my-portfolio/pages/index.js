import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { 
  AiFillTwitterCircle, 
  AiFillLinkedin, 
  AiFillGithub, 
} from 'react-icons/ai';
import Image from 'next/image';
import miles from '../public/miles-morales.jpg';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ramez Al-Siddiq Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel='icon' href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-sans'>@ram-ram14</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a 
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href='#'>
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Ramez Al-Siddiq</h2>
            <h3 className='text-2xl py-2'>Junior Software Engineer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              I deliver seamless digital experiences for end-users.
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
              <AiFillTwitterCircle />
              <AiFillLinkedin />
              <AiFillGithub />
            </div>
            <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
              <Image src={miles} layout="fill" objectFit='cover' />
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1'>Experience</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Since I graduated from university, I've worked as an
              <span className='text-teal-500'> Associate Product Manager</span> working in cross-functional teams with Product Designers and Software Engineers to deliver products that are desirable, feasible and viable. And now, I've taken a leap of faith and entered the realm of <span className='text-teal-500'>software engineering</span>. 
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              What I bring to the table?
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 flex flex-col items-center'>
              <Image src={code} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Software Engineering
              </h3>
              <p className='py-2'>
                Accelerate the delivery of software and modernise legacy apps using extreme programming practices such as test-driven development, pair-programming and continuous integration and deployment. 
              </p>
              <h4 className='py-4 text-teal-600'>Programming Languages I use</h4>
              <p className='text-gray-800 py-1'>JavaScript</p>
              <p className='text-gray-800 py-1'>Ruby</p>
              <p className='text-gray-800 py-1'>HTML & CSS</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl py-10 flex flex-col items-center'>
              <Image src={design} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                User-Centred Design
              </h3>
              <p className='py-2'>
                Gather user insights and incorporate findings to eliminate the risk of building the wrong thing.
              </p>
              <h4 className='py-4 text-teal-600'>Design Tools I know</h4>
              <p className='text-gray-800 py-1'>Figma</p>
              <p className='text-gray-800 py-1'>Sketch</p>
              <p className='text-gray-800 py-1'>Canva</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl py-10 flex flex-col items-center'>
              <Image src={consulting} width={100} height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>
                Lean Product Management
              </h3>
              <p className='py-2'>
                Deliver customer experiences that make an impact and drive business outcomes that meet your bottom line.
              </p>
              <h4 className='py-4 text-teal-600'>What it involves?</h4>
              <p className='text-gray-800 py-1'>Aligning market needs and business priority</p>
              <p className='text-gray-800 py-1'>Reducing risk through frequent validation</p>
              <p className='text-gray-800 py-1'>Measuring impact and continuously improving</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              During my Software Engineering Immersive Bootcamp at <span className='text-teal-500'> General Assembly</span>, I worked on a variety of <span className='text-teal-500'> projects</span> which are featured below.
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              Read on to learn more...
            </p>
          </div>
          <div>
            <div>
              <Image src={web1} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}