
import React, { useRef } from 'react'
import Heading from '../Heading/Heading'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/pictures/customer1.jpg'
import Customer2 from '../../assets/pictures/customer2.jpg'
import Customer3 from '../../assets/pictures/customer3.jpg'
import Customer4 from '../../assets/pictures/customer4.jpg'
import Customer5 from '../../assets/pictures/customer5.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import { FaStar } from 'react-icons/fa'

const Testimonials = () => {

  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <section>
      <div className='max-w-[1250px] px-10 py-20 mx-auto mt-[5vh]'>

        <Heading highlight='Customers' heading='Saying' />

        {/* Navigation Buttons */}

        <div className='flex justify-end py-5 gap-x-3'>
          
          <button
            ref={prevRef}
            className='text-2xl rounded-lg w-11 h-11 text-zinc-800 bg-zinc-200 hover:bg-orange-400 hover:text-white cursor-pointer flex justify-center items-center transition'
          >
            <IoIosArrowBack />
          </button>

          <button
            ref={nextRef}
            className='text-2xl rounded-lg w-11 h-11 text-zinc-800 bg-zinc-200 hover:bg-orange-400 hover:text-white cursor-pointer flex justify-center items-center transition'
          >
            <IoIosArrowForward />
          </button>

        </div>

        {/* Swiper Slider */}

        <Swiper

          modules={[Navigation]}

          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current
            swiper.params.navigation.nextEl = nextRef.current
          }}

          loop={true}

          grabCursor={true}

          slidesPerView={1}

          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 20,
            }
          }}

          className="mySwiper"
        >

          {review.map((item) => (
            <SwiperSlide
              key={item.id}
              className='bg-red-100 rounded-xl p-8'
            >

              {/* Customer Info */}

              <div className='flex gap-5 items-center'>

                <img
                  src={item.Image}
                  alt={item.name}
                  className='w-16 h-16 rounded-full object-cover outline-2 outline-orange-500 outline-offset-4'
                />

                <div>

                  <h5 className='text-xl font-bold'>
                    {item.name}
                  </h5>

                  <p className='text-zinc-600'>
                    {item.profession}
                  </p>

                  {/* Stars */}

                  <span className='flex text-yellow-400 mt-2 text-xl'>

                    {Array.from({ length: item.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}

                  </span>

                </div>

              </div>

              {/* Review Text */}

              <div className='mt-5 min-h-[15vh]'>

                <p className='text-zinc-600'>
                  {item.para}
                </p>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </section>
  )
}

export default Testimonials


const review = [
  {
    id: 1,
    name: 'AAlika Doza',
    profession: 'Home Chef',
    rating: 5,
    para: 'The fruits and vegetables are always fresh and organic. Delivery is fast and the quality is amazing. Highly recommended for daily grocery shopping!',
    Image: Customer1,
  },
  {
    id: 2,
    name: 'Rohit Sen',
    profession: 'Food Blogger',
    rating: 4,
    para: 'I love the variety of organic products available here. The vegetables are fresh and the packaging is very clean and safe.',
    Image: Customer2,
  },
  {
    id: 3,
    name: 'Arsula',
    profession: 'Restaurant Owner',
    rating: 5,
    para: 'Best grocery website I have used so far. Fresh produce, affordable prices, and reliable delivery service.',
    Image: Customer3,
  },
  {
    id: 4,
    name: 'Shaam Gupta',
    profession: 'Nutritionist',
    rating: 4,
    para: 'Perfect place to buy healthy fruits and vegetables. The quality is excellent and the products are always fresh.',
    Image: Customer4,
  },
  {
    id: 5,
    name: 'Rosi',
    profession: 'Fitness Trainer',
    rating: 5,
    para: 'I regularly order fruits and dairy products from this site. Everything arrives fresh and on time. Great service!',
    Image: Customer5,
  }
]