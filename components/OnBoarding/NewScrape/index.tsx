import React from 'react'
import StepTwoImage from "../../../public/stepper2.png"
import Image from 'next/image'

const NewScrape = () => {
  return (
    <div>
          <Image
              alt="#"
              src={StepTwoImage}
              height={312.38}
              width={499.8}
          />
          <br />
          <div className="flex justify-between items-center">
              <label className="font-medium text-xl leading-5 text-gray-700 font-inter-tight">
                  Create a new scrape
              </label>
              <div className="bg-blue-100 rounded-4 p-1">
                  <p className="font-inter-tight font-medium text-14 leading-20 text-blue-600">2/4</p>
              </div>
          </div>
          <br />
          <p>
              Lorem ipsum dolor sit amet consectetur. Ut sit vel fames egestas integer. Purus ipsum amet scelerisque commodo dui ut.
          </p>
    </div>
  )
}

export default NewScrape