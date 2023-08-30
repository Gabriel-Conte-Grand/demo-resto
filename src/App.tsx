import { FC, useState } from "react"
import "./index.css"
import ReactStars from "react-rating-star-with-type"
import { Resto } from "./types"
import { DrawerCustom } from "./Drawer"
import { restos } from "./restaurants"

function App() {
  const [showDrawerFrom, setShowDrawerFrom] = useState(false)
  const [chosenResto, setChosenResto] = useState(0)

  return (
    <main className='flex flex-col min-h-screen bg-[#101d2c] '>
      <nav className='flex justify-between    py-4 px-12 max-w-screen-md  '>
        <span className='self-center text-2xl  font-semibold whitespace-nowrap dark:text-white flex gap-1'>
          {/* <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRee6HRLHtuznXuTNzbpD26jQPtkxPgT-wrdQ&usqp=CAU'
            className='h-8 mix-blend-darken text-white'
            alt='RestoApp Logo'
          /> */}
          Resto
          <span className=' text-white px-1 bg-[#6D5D4B] rounded'>Club</span>
        </span>
      </nav>

      <article className='flex-1 bg-gray-300 place-content-center  h-full p-2 grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4 font-roboto'>
        {restos.map(({ imageSrc, name, rating, location }, index) => {
          return (
            <div
              key={name}
              className=' mx-auto'
              onClick={() => {
                setShowDrawerFrom(true)
                setChosenResto(index)
              }}
            >
              <RestoCard
                imageSrc={imageSrc}
                name={name}
                rating={rating}
                location={location}
              />
            </div>
          )
        })}
      </article>
      {showDrawerFrom ? (
        <div className='w-full md:w-3/5'>
          <DrawerCustom
            resto={restos[chosenResto]}
            setShowDrawerFrom={setShowDrawerFrom}
          />
        </div>
      ) : null}
    </main>
  )
}

export default App

const RestoCard: FC<Resto> = ({ imageSrc, rating, name, location }) => {
  return (
    <div className='grid place-content-center mx-auto group  bg-[#6D5D4B] shadow-md hover:shadow-xl hover:cursor-pointer rounded-b '>
      <img
        src={imageSrc}
        alt=''
        className='h-32 md:h-40 w-48 md:w-80 object-cover'
      />
      <div className='flex flex-col    pt-2'>
        <div className='flex justify-center mx-2 md:mx-8  py-1 md:py-2  bg-[#101d2c]'>
          <p className=' text-center   text-white  font-medium'>{name}</p>
        </div>
        <div className='flex flex-col gap-2 md:gap-8   p-1 md:p-3'>
          <div className='flex items-center justify-between'>
            <ReactStars
              onChange={() => {}}
              value={rating}
              activeColors={["yellow"]}
              size='10px'
              inactiveColor='yellow'
            />

            <p className='text-xs text-gray-300'> {location}</p>
          </div>
        </div>
      </div>
      <button className='  bg-[#f9f7f6] group-hover:text-white py-1 group-hover:bg-[#101d2c] rounded-b  text-base font-medium text-gray-600'>
        Reservar
      </button>
    </div>
  )
}
