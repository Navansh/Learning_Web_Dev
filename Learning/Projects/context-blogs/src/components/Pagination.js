import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page, handlePageChange, totalPages} = useContext(AppContext);
  return (
    <div className=' w-full'>
        <div className='flex items-center justify-between w-11/12 max-w-[690px]'>
        {/* //we've put this curly braces cz we wanted to put a condition */}
            { page > 1 &&
                (<button
                className=' rounded-md border px-4 py-1'
                onClick={() => handlePageChange(page-1)}>
                    Previous
                </button>)

            }

            { page < totalPages && 
                (<button 
                className=' rounded-md border px-4 py-1'
                onClick={() => handlePageChange(page+1)}>Next</button>)

            }

            <p className=' font-bold text-sm'>
                Page {page} of {totalPages }
            </p>
        </div>

    </div>
  )
}

export default Pagination