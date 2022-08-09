import React from 'react'
import { MenuIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { Link, useHistory } from 'react-router-dom';

export function TopBar({title, isMenu = false}) {

  const history = useHistory();

  return (
    <>
        <div className="p-5 text-2xl font-bold text-sc-blue bg-white grid grid-cols-6">
          {
            isMenu ? <ChevronLeftIcon onClick={history.goBack} className="h-9 w-9 text-sc-blue"/>
            : <Link to="/">
                <MenuIcon className="h-9 w-9 text-sc-blue" />
              </Link>
          }
          <div className='flex justify-center items-center col-start-2 col-end-6'>
              {title}
          </div>
        </div>
    </>
  )
}
