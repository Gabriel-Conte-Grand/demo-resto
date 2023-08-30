import { Dispatch, FC, useState } from "react"
import "./index.css"
import ReactStars from "react-rating-star-with-type"
import { Resto } from "./types"
import { Drawer } from "vaul"
// import DateTimePicker from "react-datetime-picker"

function App() {
  const restos: Resto[] = [
    {
      name: "La Castellana",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRAaC7L66ERSnUIqK2uJPb98W7YNbIbYjwRA&usqp=CAU",
      rating: 4.5,
      location: "Paseo del Arte",
    },
    {
      name: "Parillada Don Julio",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTWnMO247Pv8xOeNHeuFqXAZ7dz2Q7HmurNg&usqp=CAU",
      rating: 4.5,
      location: "Sol - Gran Vía",
    },
    {
      name: "Antares",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOsXCu8kp5Ik5NmU-dw3vKPkKGL9wiNvsH3A&usqp=CAU",
      rating: 4.5,
      location: "Paseo del Arte",
    },
    {
      name: "Moño Rojo",
      imageSrc:
        "data:image/jpeg;base64,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",
      rating: 4.5,
      location: "Paseo del Arte",
    },
    {
      name: "Beach club",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAP_m3Lek9dSJhGmohWTSZ5nubNbFPr_6gE19oWK60EhZnmxVGVCSmIoAjsSA8dgeCACY&usqp=CAU",
      rating: 4.5,
      location: "Barcelona",
    },
    {
      name: "Kentucky",
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyT-H7wrF02KKpm1vQeDnAaSvujvG4wB-5Eg&usqp=CAU",
      rating: 4.5,
      location: "Paseo del Arte",
    },
  ]

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

// type Props = {
//   imageSrc: string
//   rating: number
// }

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

type DrawerProps = {
  setShowDrawerFrom: Dispatch<React.SetStateAction<boolean>>

  resto: Resto
}

type ValuePiece = Date | null

type Value = ValuePiece | [ValuePiece, ValuePiece]

const DrawerCustom: FC<DrawerProps> = ({ resto, setShowDrawerFrom }) => {
  const [value, onChange] = useState<Value>(new Date())

  const delay = async (miliseconds: number) => {
    await setTimeout(() => {}, miliseconds)
  }

  return (
    <Drawer.Root
      onRelease={() => {
        setShowDrawerFrom(false)
      }}
      defaultOpen={true}
    >
      <Drawer.Trigger asChild>
        <button>Open Drawer</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className='fixed inset-0 bg-black/40' />
        <Drawer.Content className='bg-zinc-100 flex flex-col px-4 rounded-t-[10px] h-[96%] mt-24 fixed bottom-0 left-0 right-0 py-3'>
          <div className='mx-auto w-12  h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8' />

          <div className='flex flex-col md:flex-row gap-3'>
            <div className='flex flex-col w-full'>
              <img
                src={resto.imageSrc}
                alt=''
                className='h-32 md:h-60 w-full  bg-zinc-300 object-none rounded shadow-lg'
              />
              <span className='hidden md:flex py-8 text-base text-left md:font-thin text-[#2e2e45]'>
                Con capacidad para acoger a más de 100 comensales, el
                restaurante es un amplio y acogedor espacio que combina la
                calidez de la tradición culinaria local con toques modernos.
                Ubicado estratégicamente, el restaurante cuenta con un cómodo
                estacionamiento que hace que visitarlo sea aún más conveniente.
                <br /> Ya sea para reuniones familiares, cenas íntimas o eventos
                especiales, ofrece un entorno espacioso y servicios
                cuidadosamente diseñados para brindar una experiencia
                gastronómica excepcional.
              </span>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between'>
                <p className='text-lg md:text-2xl font-semibold text-gray-800'>
                  {resto.name}
                </p>
                <p className='text-gray-500 text-sm md:text-lg'>
                  {resto.location}
                </p>
              </div>
              <span>
                <ReactStars
                  onChange={() => {}}
                  value={resto.rating}
                  activeColors={["yellow"]}
                  size='12px'
                  inactiveColor='yellow'
                />
              </span>
              <p className='text-xs md:text-xl md:font-thin text-[#2e2e45]  '>
                Desde las tapas más auténticas hasta creaciones contemporáneas,
                cada bocado es una obra maestra de sabor. Con una atmósfera
                acogedora y elegante, nuestro restaurante en Madrid es el lugar
                perfecto para disfrutar de momentos inolvidables y descubrir la
                riqueza culinaria de España.
              </p>
              <span className='text-center text-xl text-[#101d2c] md:mt-20'>
                Haz tu reserva
              </span>
              <div className='flex flex-col gap-4'>
                <input
                  type='datetime-local'
                  className='text-sm mx-auto p-2 rounded border-gray-500 shadow-md'
                />
                <div className='flex justify-between gap-3'>
                  <input
                    type='number'
                    min={1}
                    max={15}
                    placeholder='N° Personas'
                    className='p-2 rounded shadow w-1/3'
                  />
                  <input
                    type='email'
                    placeholder='Email'
                    className='p-2 rounded shadow flex-1'
                  />
                </div>
                <div className='flex justify-between gap-3'>
                  <input
                    type='text'
                    placeholder='Nombre'
                    className='p-2 rounded shadow w-1/2'
                  />
                  <input
                    type='tel'
                    placeholder={`Teléfono`}
                    className='p-2 rounded shadow w-1/2'
                  />
                </div>
                <button
                  onClick={() => {
                    toast.success("Reservado!")
                  }}
                  className='bg-[#c69d6f] font-bold hover:bg-[#c69d6fd1] text-white p-2 rounded shadow hover:shadow-lg'
                >
                  Reservar!
                </button>

                <Toaster position='bottom-center' />
                {/* {toast.success("Succesfully")} */}
              </div>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  )
}

import "react-datetime-picker/dist/DateTimePicker.css"
import "react-calendar/dist/Calendar.css"
import "react-clock/dist/Clock.css"
import toast, { Toaster } from "react-hot-toast"
