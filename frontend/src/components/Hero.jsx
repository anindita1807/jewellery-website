import { FaStar } from "react-icons/fa"

const Hero = () => {
  return (
    <section className='relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full pb-12'>
        <div className='max_padd_container relative top-32 xs:top-52 '>
            <h1 className='h1 capitalize max-w-[37rem]'>Online Jewellery Shopping hub</h1>
            <p className='text-gray-50 regular-16 mt-6 max-w-[33rem]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt assumenda sequi libero tenetur exercitationem sapiente ad laudantium doloribus, molestias ea qui illo modi 
                quas nemo sit recusandae ipsum ratione reiciendis expedita tempore laborum.</p>
        <div className='flexStart !items-center gap-x-4 my-10'>
            <div className='!regular-24 flexCenter gap-x-3'>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                

            </div>
            <div className='bold-16 sm:bold-20'>176k <span className='regular-16 sm:regular-20'>Excellent Reviews</span>

            </div>

        </div>


        </div>
    </section>
  )
}

export default Hero