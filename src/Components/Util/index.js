import React from 'react'

function Util({meals}) {
    
    return (
        <div>


          
                    <div class="grid grid-cols-2 gap-4 my-5">

                        <div>
                            <p className="text-white font-medium my-2">Select Category</p>
                            <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option>{meals.category}</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>
                        <div>
                            <p className="text-white font-medium my-2">Select Category</p>
                            <select id="currency" name="currency" aria-label="Currency" class="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                                <option>USD</option>
                                <option>CAD</option>
                                <option>EUR</option>
                            </select>
                        </div>

                    </div>
              





        </div>
    )
}

export default Util
