import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials" class="bg-gray-50 dark:bg-darkBlue">
    <div class="container mx-auto px-6 pt-12 pb-80 md:pb-96">
      <div
        class="relative flex flex-col w-full space-y-6 md:flex-row md:space-y-0 md:space-x-12"
      >
        <img
          src="images/bg-quotes.png"
          alt=""
          class="absolute left-1 -top-2 w-10 md:-top-16 md:w-20"
        />
        <div
          class="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
        >
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="flex space-x-4">
            <img
              src="images/profile-1.jpg"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h5 class="text-sm font-semibold">Satish Patel</h5>
              <p class="text-xs font-extralight">Founder & CEO. Huddle</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
        >
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="flex space-x-4">
            <img
              src="images/profile-2.jpg"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h5 class="text-sm font-semibold">Bruce McKenzie</h5>
              <p class="text-xs font-extralight">Founder & CEO. Huddle 2</p>
            </div>
          </div>
        </div>

        <div
          class="flex flex-col p-10 space-y-6 rounded-lg bg-gray-100 dark:bg-darkBlue3 md:w-1/3"
        >
          <p class="text-sm leading-5 md:text-lg">
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div class="flex space-x-4">
            <img
              src="images/profile-3.jpg"
              alt=""
              class="w-10 h-10 rounded-full"
            />
            <div>
              <h5 class="text-sm font-semibold">Eva Boyd</h5>
              <p class="text-xs font-extralight">Founder & CEO. Huddle 3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testimonials