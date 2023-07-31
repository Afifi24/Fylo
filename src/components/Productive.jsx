import React from 'react'

const Productive = () => {
  return (
    <section id="productive" class="bg-white dark:bg-darkBlue">
      <div
        class="container flex flex-col items-center mx-auto px-6 pt-24 pb-32 md:flex-row md:space-x-16"
      >
        <div class="md:w-1/2">
          <img
            src="images/illustration-stay-productive.png"
            alt=""
            class="mb-10"
          />
        </div>
        <div class="flex flex-col items-start md:w-1/2">
          <div class="flex flex-col space-y-5">
            <h4 class="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p class="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p class="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div class="block mt-4">
            <a href="#" class="border-b border-accentCyan text-accentCyan">
              See how Flyo works
              <img src="images/icon-arrow.svg" alt="" class="inline pb-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Productive