import React from 'react'

export const Countdown = () => {
    return (
        <div className="bg-footer w-full sm:flex items-center -top-16">
            <div className="flex items-center gap-x-4 ml-5 h-6 my-3">
                <div className="bg-squareFooter w-1 h-1 rotate-45"></div>
                <div className="bg-squareFooter w-2 h-2 rotate-45"></div>
                <div className="bg-squareFooter w-3 h-3 rotate-45"></div>
                <div className="bg-squareFooter w-4 h-4 rotate-45"></div>
            </div>
            <div className=" right-full mx-auto px-4">
                <div className="font-sans text-mikeWhite text-3xl ">
                    CUENTA REGRESIVA PARTIDO INAUGURAL
                </div>
            </div>
            {/* <div className=" right-full px-4">
          <div className="font-sans text-mikeWhite text-3xl ">
            CUENTA REGRESIVA PARTIDO INAUGURAL
          </div>
        </div> */}
        </div>
    )
}
