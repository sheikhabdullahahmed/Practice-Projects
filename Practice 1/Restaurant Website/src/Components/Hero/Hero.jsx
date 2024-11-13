import React from 'react'
import bgImg  from '../../assets/assets/vector3.png'
import Food1 from '../../assets/assets/biryani2.png' 
import Food2 from '../../assets/assets/biryani3.png' 
import Food3 from '../../assets/assets/biryani5.png' 

const ImageList = [
    {
        id: 1,
        image: Food1
    },
    {
        id: 2,
        image: Food2
    },
    {
        id: 3,
        image: Food3
    },

]


const bgImage = {
    backgroundImage: `url(${bgImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}


export default function Hero() {

    const  [imageid, setImageId] = React.useState(Food1);


  return (
    <div>
        <div 
        className='min-h-[550px] sm:min-h-[575px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200 flex justify-center items-center ' 
        style={bgImage} >
            <div className='container pb-8 sm:pb-0-'>
                <div className='grid grid-cols-1 sm:grid-cols-2'>
                    {}
                    <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1'>
                        <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold '>
                            Welcome to the Foodie Zone  
                        </h1>
                        <p className='text-sm'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
                        reiciendis inventore iste ratione ex alias quis magni at optio

                        </p>
                        <div>
                            <button className='bg-gradient-to-r from-yellow-300 to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 '>
                                Order Now
                            </button>
                        </div>
                    </div>
                    {}
                    <div className='order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative  '>
                        {}
                        <div className='flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden'>
                            <img src={imageid} alt="" className='w-[300px] sm:w-[450px] mx-auto spin' />
                        </div>
                        {}
                        <div className=''>
                            {
                                ImageList.map(item => {
                                   return <img key={item.id} src={item.image} alt="" className='max-w-[80px] h-[80px] spin object-contain flex hover:scale-105 duration-200' />
                                })
                            }
                        </div>
                    </div>

                </div>

            </div>

        </div>


    </div>
  )
}