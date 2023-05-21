import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const {page, handlePageChange, totalPages} = useContext(AppContext);
    
  return (
    <div className=' w-full flex justify-center fixed border-4 shadow-xl bottom-0 py-3 bg-white'>
        <div className='flex items-center justify-between w-11/12 max-w-[690px]'>
        {/* //we've put this curly braces cz we wanted to put a condition */}
            <div className=' flex gap-x-2'>
                { page > 1 &&
                //this shows button only if page > 1
                        (<button
                        className=' rounded-md border px-4 py-1'
                        onClick={() => handlePageChange(page-1)}>
                            Previous
                        </button>)

                    }

                { page < totalPages && 
                    //this shows button only if page < totalPages
                    (<button 
                    className=' rounded-md border px-4 py-1'
                    onClick={() => handlePageChange(page+1)}>Next</button>)

                }
            </div>
            

            <p className=' font-bold text-sm'>
                Page {page} of {totalPages }
            </p>
        </div>

    </div>
  )
}

export default Pagination