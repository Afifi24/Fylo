import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-darkBlue2 text-white">
      <div class="container mx-auto pt-12 px-5 pb-10">
        <div
          class="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0"
        >
          <div class="mt-10 space-y-6">
            <div class="flex items-center space-x-3 md:-mt-10">
              <div class="w-6">
                <img src="images/icon-phone.svg" alt="" class="scale-10" />
              </div>
              <div>+212614350974</div>
            </div>
            <div class="flex items-center space-x-3">
              <div class="w-6">
                <img src="images/icon-email.svg" alt="" class="scale-10" />
              </div>
              <div>afifi71brahim@gmail.com</div>
            </div>
          </div>
          <div
            class="flex flex-col space-y-10 text-xl md:text-base md:space-x-20 md:space-y-0 md:flex-row"
          >
            <div class="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div class="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
          <div class="flex justify-center pb-10 space-x-3">
            <div>
              <a href="#">
                <img
                  src="images/facebook.svg"
                  alt=""
                  class="p-2 bg-darkBlue rounded-full ficon"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="images/twitter.svg"
                  alt=""
                  class="p-2 bg-darkBlue rounded-full ficon"
                />
              </a>
            </div>
            <div>
              <a href="#">
                <img
                  src="images/instagram.svg"
                  alt=""
                  class="p-2 bg-darkBlue rounded-full ficon"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer