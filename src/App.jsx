import './app.css'
import { useInView } from 'react-intersection-observer';
import logo from '/frontend/assests/TheDumplingLadyLogo.png'
import { useEffect } from 'react';
function App() {
  const { ref: ref, inView } = useInView()
  const { ref: rotateRef, inView: rotateInView } = useInView()
  const { ref: rotateRef2, inView: rotateInView2 } = useInView()
  const { ref: highlightRef, inView: highlightInView } = useInView()
  const { ref: excRef, inView: excInView } = useInView()
  const { ref: excParagraphRef, inView: excParagraphInView } = useInView()
  const { ref: spinRef, inView: spinInView } = useInView()
  useEffect(() => {
    document.title = 'The Dumpling Lady | Home'
  })

  return (
    <div className="bg-gray-200 font-main">
      <head>
        <title>The Dumpling Lady</title>
      </head>
      <div className="h-screen w-screen flex flex-col bg-[url('https://unpretentiouspalate.com/wp-content/uploads/2023/08/dumpling-lady-wide.jpg')] z-10 bg-zinc-900" id="firstDiv">
        <nav className="w-screen h-[9%] bg-transparent flex place-items-center justify-between text-zinc-900 top-0 sticky pt-2 z-20">
          <div className="h-full w-1/6 flex pl-7">
            <img className="h-full" src={logo} alt="" />
          </div>
          <ul className="w-4/6 h-fit flex justify-center space-x-10">
            <li><a className="" href="" id="underline">About us</a></li>
            <li><a className="" href="" id="underline">Menu</a></li>
            <li><a className="" href="" id="underline">Cooking Guide</a></li>
            <li><a className="" href="" id="underline">Gift Cards</a></li>
          </ul>
          <ul className="flex place-items-center w-1/6 justify-evenly pr-7 space-x-3">
            <a href="" id="underline">Contact</a>
            <a className="focus:outline-none text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-7 py-3.5 dark:focus:ring-yellow-900" href="">Place Order</a>
          </ul>
        </nav>
        <div className="h-screen w-full flex place-items-center">
          <div className="flex flex-col mx-24 space-y-8">
            <h2 className="font-bold text-4xl tracking-wide" id="tagLine">Traditional Sichuan Dishes</h2>
            <p className="text-lg tracking-wide w-[40%]">Handcrafted genuine dumplings bursting with flavor. An artisan experience authenically carefully crafted in western China. The Dumpling Lady - where tradition meets deliciousness</p>
            <a href="" className="w-fit focus:outline-none text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" id="btn-4">Order Now</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex-col justify-center h-screen" id="secondDiv">
        <section className="flex h-full place-items-center">
          <div className="w-2/5 h-3/5 pl-24 py-16 flex flex-col space-y-5">
            <h1 ref={highlightRef} className={`${highlightInView ? 'chengduHighlight' : 'text-5xl'}`} id="highlight">Chengdu style</h1>
            <p ref={ref} className={`${inView ? 'giveAnimation' : 'text-xl'}`}>One of our most popular dishes. Handcrafted, and steamed to perfection, served with our iconic soy reduction sauce. A Sichuan classic that you're sure to enjoy</p>
            <a href="" className="w-fit focus:outline-none text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" id="btn-4">Order Now</a>
          </div>
          <div className="w-3/5 h-[66%] self-center flex place-content-center py-16 transition-all duration-200">
            <img ref={rotateRef} id="firstImage" className={`${rotateInView ? 'rotate-6 rounded-lg transition-all duration-1000' : 'rounded-lg'}`} src="https://www.offtheeatenpathblog.com/wp-content/uploads/2018/10/the-dumpling-lady-dumplings.jpg" alt="" />
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -55 1440 320"><path fill="#18181b" fill-opacity="1" d="M0,32L26.7,53.3C53.3,75,107,117,160,138.7C213.3,160,267,160,320,160C373.3,160,427,160,480,154.7C533.3,149,587,139,640,154.7C693.3,171,747,213,800,234.7C853.3,256,907,256,960,266.7C1013.3,277,1067,299,1120,304C1173.3,309,1227,299,1280,293.3C1333.3,288,1387,288,1413,288L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <section className="h-screen w-screen bg-gray-200 flex flex-col" id="secondSectionDiv">
        <div className="w-full h-full flex gap-48 bg-zinc-900">
          <div className="w-2/5 h-full flex place-items-center py-16 pl-24">
            <img ref={rotateRef2} className={rotateInView2 ? 'h-3/5 rounded-lg transition-all duration-1000 -rotate-3' : 'w-[1%] h-[1%]'} src="https://whatnowcharlotte.com/wp-content/uploads/sites/35/2023/04/125996377_2816905261964646_3453868552995903738_n-1-873x1024.jpeg" alt="" />
          </div>
          <div className="w-2/5 h-full flex flex-col place-content-center justify-content-start text-gray-200 space-y-5">
            <h1 ref={excRef} className={`${excInView ? 'exceptionialService' : 'text-5xl'}`}>Hand Crafted Noodles</h1>
            <p ref={excParagraphRef} className={excParagraphInView ? 'exceptionialServiceParagraph' : 'text-xl'}>Delicately handmade flour noodles served with pork, beef, chicken or tofu. Mixed with vegetables and our fan favorite chilli oil.</p>
            <a href="" className="w-fit focus:outline-none text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" id="btn-4">Order Now</a>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen flex" id="cutIt">
        <div className="flex flex-col w-1/2 place-items-center justify-center space-y-12 text-zinc-900">
          <span className="text-4xl font-semibold">Sourced as locally as possible</span>
          <span className="text-4xl font-semibold">All food made in house daily</span>
          <span className="text-4xl font-semibold">Vegetarian and vegan options for all</span>
          <span className="text-4xl font-semibold">Fresh, seasoned and read to eat</span>
          <span className="text-4xl font-semibold">Hand crafted flour based noodles</span>
        </div>
        <div className="w-1/2 flex justify-center">
          <img ref={spinRef} className={`${spinInView ? 'spinning' : 'h-[1%] w-[1%]'}`} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_n4U7y_OAWI1rWTojGXy-dihXfzeH-FhFR0A73kKwNA&s" alt="" />
        </div>
      </section>
      <section className="h-screen w-screen bg-zinc-900 flex">
        <div className="w-1/2 flex flex-col justify-center place-items-end">
          <div className="flex flex-col pl-24 space-y-10">
            <h3 className="text-5xl text-gray-100">Our Journey</h3>
            <p className="text-xl text-gray-100">From the recipe books in China, to three locations, the dumpling lady has gone from idea, to food truck, to restaurants, whilst pleasing thousands of customers along the way</p>
            <a href="" className="w-fit focus:outline-none text-zinc-900 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900" id="btn-4">Learn More</a>
          </div>
        </div>
        <div className="w-1/2 grid grid-rows-2 grid-cols-2 place-items-center">
          <span><svg
  width="100"
  height="100"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
    fill="#fbbf24"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
    fill="#fbbf24"
  />
  <path d="M21 11H13V13H21V11Z" fill="#fbbf24" />
  <path d="M13 15H21V17H13V15Z" fill="#fbbf24" />
  <path d="M21 19H13V21H21V19Z" fill="#fbbf24" />
</svg></span>
          <span><svg
  width="100"
  height="100"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
    fill="#fbbf24"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
    fill="#fbbf24"
  />
  <path d="M21 11H13V13H21V11Z" fill="#fbbf24" />
  <path d="M13 15H21V17H13V15Z" fill="#fbbf24" />
  <path d="M21 19H13V21H21V19Z" fill="#fbbf24" />
</svg></span>
          <span><svg
  width="100"
  height="100"
  viewBox="0 0 24 24"
  fill="#fbbf24"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
    fill="#fbbf24"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
    fill="#fbbf24"
  />
  <path d="M21 11H13V13H21V11Z" fill="#fbbf24" />
  <path d="M13 15H21V17H13V15Z" fill="#fbbf24" />
  <path d="M21 19H13V21H21V19Z" fill="#fbbf24" />
</svg></span>
          <span><svg
  width="100"
  height="100"
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 3V9H21V3H3ZM19 5H5V7H19V5Z"
    fill="#fbbf24"
  />
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M3 11V21H11V11H3ZM9 13H5V19H9V13Z"
    fill="#fbbf24"
  />
  <path d="M21 11H13V13H21V11Z" fill="#fbbf24" />
  <path d="M13 15H21V17H13V15Z" fill="#fbbf24" />
  <path d="M21 19H13V21H21V19Z" fill="#fbbf24" />
</svg></span>
        </div>
      </section>
      <footer className="bg-zinc-800 text-gray-100 flex justify-center py-20 ">
        <div className="grid grid-cols-4 w-5/6">
          <div className="text-lg">The Dumpling Lady</div>
          <div>
            <ul className="flex flex-col space-y-3">
              <li className="font-bold text-lg">Useful Links</li>
              <a className="hover:underline w-fit" href="">Gift cards</a>
              <a className="hover:underline w-fit" href="">About us</a>
              <a className="hover:underline w-fit" href="">Cooking guides</a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col space-y-3">
              <li className="font-bold text-lg">Main Menu</li>
              <a className="hover:underline w-fit" href="">Home</a>
              <a className="hover:underline w-fit" href="">Menu</a>
              <a className="hover:underline w-fit" href="">Locations</a>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col space-y-3">
              <li className="font-bold text-lg">Contact us</li>
              <li>thedumplingladyclt@gmail.com</li>
              <li>{`(704) 698 8287`}</li>
              <li>@thedumplingladyclt</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
