import { Dispatch, FC } from "react"
import toast, { Toaster } from "react-hot-toast"
import { Resto } from "./types"
import { Drawer } from "vaul"
import ReactStars from "react-rating-star-with-type"

type DrawerProps = {
  setShowDrawerFrom: Dispatch<React.SetStateAction<boolean>>
  resto: Resto
}

export const DrawerCustom: FC<DrawerProps> = ({ resto, setShowDrawerFrom }) => {
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
