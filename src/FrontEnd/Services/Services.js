import React from 'react'

const Services = () => {
  return (
    <div>
        <div class="bg-gray-900 py-16">
    <div class="container mx-auto px-4">
    <div className="floating-text2">
        <h2 class="text-3xl font-bold text-white mb-8 text-center">Our Services </h2>
    </div>
        <hr className='text-6xl'></hr>
        <br/>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-gray-300 rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://preview.redd.it/7omvghx1t5171.jpg?width=640&crop=smart&auto=webp&s=0b85f1798316b694fc52883cfdb5bf8847ddd2c6" alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Old TV Repair</h3>
                <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div class="bg-gray-300 rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://img.freepik.com/free-photo/man-watching-his-favorite-movie-tv_23-2149047399.jpg?w=996&t=st=1701581967~exp=1701582567~hmac=16a8d062be7e42e08cb278f7e5b8e4161ab619eadd74b792156062bae03d2fe5" alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">LCD/LED TV Repair </h3>
                <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
            <div class="bg-gray-300 rounded-lg shadow-lg p-8">
                <div class="relative overflow-hidden">
                    <img class="object-cover w-full h-full" src="https://img.freepik.com/free-photo/checking-current-laptop-circuit-board_1098-13759.jpg?size=626&ext=jpg&ga=GA1.1.296656087.1697620790&semt=ais" alt="Product"/>
                    <div class="absolute inset-0 bg-black opacity-40"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <button class="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300">View more</button>
                    </div>
                </div>
                <h3 class="text-xl font-bold text-gray-900 mt-4">Electric Devices Repair</h3>
                <p class="text-gray-500 text-sm mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex items-center justify-between mt-4">
                    <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                </div>
            </div>
        </div>

    </div>
</div>
    </div>
  )
}

export default Services