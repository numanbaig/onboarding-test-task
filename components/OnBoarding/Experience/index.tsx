import React from 'react'
import TextArea from '../../TextArea'

const Experiences = () => {
  return (
      <div> <label className="font-medium text-l leading-5 text-gray-700 font-inter-tight mb-5" htmlFor="my-input">
          Expertise and Experiences
      </label>
          <br />
          <br />
          <TextArea placeholder="I have 5 years experience working at a fortune 500 company where we helped 1000th companies scale to X. I have strong copywriting skills via ...." />
          <br />
          <br />
          <label className="font-medium text-l leading-5 text-gray-700 font-inter-tight mb-5" htmlFor="my-input">
              How would you like to sign off the proposal
          </label>
          <br />
          <br />
          <TextArea placeholder="I look forward to hearing a prompt response from yourself as I prepare to engage with your organisation" />
          <br />
          <br />

          <div className="flex justify-between items-center">
              <label className="font-medium text-xl leading-5 text-gray-700 font-inter-tight">
                  Help Us Customize your Prompts
              </label>
              <div className="bg-blue-100 rounded-4 p-1">
                  <p className="font-inter-tight font-medium text-14 leading-20 text-blue-600">1/4</p>
              </div>
          </div>
          <br />
          <p>
              Please fill in this form to the best of your detail so we can customize <br /> your AI generated proposals as much as possible.
              <br />
              <br />
              You can change these at any time by heading over to the settings <br /> tab within the app!
          </p></div>
  )
}

export default Experiences