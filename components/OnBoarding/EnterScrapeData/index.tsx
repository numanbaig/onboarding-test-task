import React from 'react'
import StepthreeImage from "../../../public/stepper3.png"
import Image from 'next/image'

const EnterScrapeData = () => {
  return (
    <div>
          <Image
              alt="#"
              src={StepthreeImage}
              style={{
                  height: '307.28px',
                  width: '394px'
              }}
          />
          <br />
          <div className="flex justify-between items-center">
              <label className="font-medium text-xl leading-5 text-gray-700 font-inter-tight">
                  Enter scrape data
              </label>
              <div className="bg-blue-100 rounded-4 p-1">
                  <p className="font-inter-tight font-medium text-14 leading-20 text-blue-600">3/4</p>
              </div>
          </div>
          <br />
          <p>
              On this modal section, enter the details of your scrape
              <br />
              <br />
              Here you can choose where you will like to be notified, the interval of your scrape and the Upwork RSS feed for your jobs
              <br />
              <br />
              Don't worry, on the form we'll have a video showing you exactly how to get this information
          </p>
    </div>
  )
}

export default EnterScrapeData