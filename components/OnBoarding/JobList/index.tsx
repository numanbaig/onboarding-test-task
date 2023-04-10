import Image from 'next/image'
import React from 'react'
import StepFourImage from "../../../public/stepper4.png"

const EnterJobList = () => {
  return (
    <div>
          <Image
              alt="#"
              src={StepFourImage}
              height={489.35}
              width={368.03}
          />
          <br />
          <div className="flex justify-between items-center">
              <label className="font-medium text-xl leading-5 text-gray-700 font-inter-tight">
                  Get a list of jobs
              </label>
              <div className="bg-blue-100 rounded-4 p-1">
                  <p className="font-inter-tight font-medium text-14 leading-20 text-blue-600">4/4</p>
              </div>
          </div>
          <br />
          <p>
              With your scrape added, now the fun begins!
              <br />
              <br />
              Either check the jobs dashboard or just sit back and wait for you to be notified in your chosen platforms!
          </p>
    </div>
  )
}

export default EnterJobList