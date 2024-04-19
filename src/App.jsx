import './app.css'
import { useInView } from 'react-intersection-observer';
function App() {
  const { ref: ref, inView} = useInView()
  const { ref: rotateRef, inView: rotateInView} = useInView()
  const { ref: rotateRef2, inView: rotateInView2} = useInView()
  const { ref: highlightRef, inView: highlightInView} = useInView()
  const { ref: excRef, inView: excInView} = useInView()
  const { ref: excParagraphRef, inView: excParagraphInView} = useInView()
  const { ref: spinRef, inView: spinInView} = useInView()


  return (
    <div className="bg-gray-200 font-main">
      <div className="h-screen w-screen flex flex-col bg-[url('https://unpretentiouspalate.com/wp-content/uploads/2023/08/dumpling-lady-wide.jpg')] z-10 bg-zinc-900" id="firstDiv">
        <nav className="h-fit w-full flex place-content-between px-2 py-3 text-slate-900 text-lg pr-6 bg-gray-200 top-0 sticky align-items-center">
          <div className="w-6/12 flex justify-between place-items-center">
            <a href="/">
              <img className="h-14 hover:cursor" src="https://static1.squarespace.com/static/65249ed59b4bc017deda558c/t/652e7272fda70a4491d12952/1699547175899/" alt="" />
            </a>
            <a href="" id="underline">About us</a>
            <a href="" id="underline">Menu</a>
            <a href="" id="underline">Cooking Guide</a>
            <a href="" id="underline">Gift Cards</a>
            <a href="" id="underline">Locations</a>
          </div>
          <div className="w-fit flex justify-evenly place-content-end place-items-center space-x-6">
            <a href="" className="text-lg w-fit tracking-wide bg-yellow-400 rounded-lg py-1 px-2 text-slate-900 transition-all duration-200 hover:bg-yellow-500" id="btn-4">Order Now</a>
            <a href="www.instagram.com" className="hover:cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="currentColor"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="currentColor"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a className="cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </nav>
        <div className="h-screen w-full flex place-items-center">
          <div className="flex flex-col mx-24 space-y-3">
            <h2 className="font-bold text-4xl tracking-wide" id="tagLine">Traditional Sichuan Dishes</h2>
            <a href="" className="text-lg w-fit tracking-wide bg-yellow-400 rounded-lg py-1 px-2 text-slate-900 transition-all duration-200 hover:bg-yellow-500" id="btn-4">Order Now</a>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex-col justify-center h-screen" id="secondDiv">
        <section className="flex h-3/5 place-items-center">
          <div className="w-2/5 h-3/5 pl-24 py-16 flex flex-col space-y-2">
            <h1 ref={highlightRef} className={`${highlightInView ? 'chengduHighlight' : ''}`} id="highlight">Chengdu style</h1>
            <p ref={ref} className={`${inView ? 'giveAnimation' : 'opacity-100'}`}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aut corrupti consectetur cupiditate Lorem ipsum dolor sit, amet consectetur.</p>
            <a href="" className=" text-lg w-fit tracking-wide bg-yellow-400 rounded-lg py-1 px-2 text-slate-900 transition-all duration-200 hover:bg-yellow-500" id="btn-4">Learn More</a>
          </div>
          <div className="w-3/5 h-full self-end flex place-content-center py-16 transition-all duration-200">
            <img ref={rotateRef} id="firstImage" className={`${rotateInView ? 'rotate-6 rounded-lg transition-all duration-1000' : 'rounded-lg'}`} src="https://www.offtheeatenpathblog.com/wp-content/uploads/2018/10/the-dumpling-lady-dumplings.jpg" alt="" />
          </div>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#18181b" fill-opacity="1" d="M0,32L26.7,53.3C53.3,75,107,117,160,138.7C213.3,160,267,160,320,160C373.3,160,427,160,480,154.7C533.3,149,587,139,640,154.7C693.3,171,747,213,800,234.7C853.3,256,907,256,960,266.7C1013.3,277,1067,299,1120,304C1173.3,309,1227,299,1280,293.3C1333.3,288,1387,288,1413,288L1440,288L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
      </div>
      <section className="h-screen w-screen bg-gray-200 flex flex-col" id="secondSectionDiv">
        <div className="w-full h-full flex gap-48 bg-zinc-900">
          <div className="w-2/5 h-full flex place-items-center py-16 pl-24">
            <img ref={rotateRef2} className={rotateInView2 ? 'h-3/5 rounded-lg transition-all duration-1000 -rotate-3' : ''} src="https://www.charlottemagazine.com/content/uploads/data-import/23abcd30/082016dumplingladycltmag0223.jpg" alt="" />
          </div>
          <div className="w-2/5 h-full flex flex-col place-content-center self-end text-gray-200 space-y-2">
            <h1 ref={excRef} className={`${excInView ? 'exceptionialService' : ''}`}>Exceptional Service</h1>
            <p ref={excParagraphRef} className={excParagraphInView ? 'exceptionialServiceParagraph' : ''}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque assumenda, sunt incidunt vel est amet quis. Voluptates.</p>
            <a className="text-lg w-fit tracking-wide bg-yellow-400 rounded-lg py-1 px-2 text-slate-900 transition-all duration-200 hover:bg-yellow-500" href="">Learn More</a>
          </div>
        </div>
      </section>
      <section className="h-screen w-screen bg-gray-200 flex flex-col place-items-center justify-center">
        <img ref={spinRef} className={`${spinInView ? 'spinning' : ''}`} src="https://images.squarespace-cdn.com/content/v1/65249ed59b4bc017deda558c/57ef9945-94b5-4478-85d0-fb545407c897/F875EAE4-40B4-46E7-A930-648DADC59BFF.jpeg?format=300w" alt="" />
      </section>
    </div>
  )
}

export default App
