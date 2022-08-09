import React from 'react'

export default function Member({ member }) {
  return (
    <li className='w-full rounded-md overflow-hidden shadow-xl'>
      <div className="bg-white w-72 sm:w-[480px] px-8 py-5 flex justify-between">
        <div className="flex-col flex space-y-4">
          <span>{`First name: `}</span>
          <span>{`Last name: `}</span>
          <span>{`Date of birth: `}</span>
        </div>
        <div className="flex-col flex space-y-4">
          <span>{member.firstName}</span>
          <span>{member.lastName}</span>
          <span>{member.dataOfBirth}</span>
        </div>
      </div>
    </li>
  )
}
