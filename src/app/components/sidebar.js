import { useState } from "react"

const Sidebar = () => {
    const [stateTimestamp, setStateTimestamp] = useState(false)

    const openSideSub = (e) => {
      if(stateTimestamp) {
        setStateTimestamp(false)
      } else {
        setStateTimestamp(true)
      }
    }
    return (
            <div
              className="sidebar absolute w-[300px] h-full overflow-y-auto text-center bg-gray-800 rounded-tr rounder-br px-2"
            >
              <div
                className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white mt-5"
              >
                <i className="bi bi-search text-sm"></i>
                <input
                  type="text"
                  placeholder="Search"
                  className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
                />
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white"
              >
                <i className="bi bi-house-door-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Notificaton</span>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white"
              >
                <i className="bi bi-bookmark-fill"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Add Note</span>
              </div>
              <div className="my-4 bg-gray-600 h-[1px]"></div>
              <div
                onClick={openSideSub}
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white"
                //onclick here
              >
                <i className="bi bi-chat-left-text-fill"></i>
                <div className="flex justify-between w-full items-center">
                  <span className="text-[15px] ml-4 text-gray-200 font-bold">Timespan</span>
                  <span className="text-sm" id="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </span>
                </div>
              </div>
              <div
                className={`text-left text-sm w-4/5 mx-auto text-gray-200 bg-gray-700 font-bold overflow-hidden rounded mt-2 global-transition ${stateTimestamp ? 'py-2 max-h-52' : 'max-h-0'}`}
              >
                <h1 onClick={()=> {
                        const box = document.querySelector('#cb-timespan-today')
                        if(box.checked) {
                            box.checked = false
                            
                        } else {
                            box.checked = true
                        }
                    }}
                    className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1 flex justify-between">
                    <label htmlFor="#cb-timespan-today">Today</label>
                    <input id="cb-timespan-today" type="checkbox">
                    </input>
                </h1>
                <h1 onClick={()=> {
                        const box = document.querySelector('#cb-timespan-week')
                        if(box.checked) {
                            box.checked = false
                            
                        } else {
                            box.checked = true
                        }
                    }}
                    className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1 flex justify-between">
                    <label>This Week</label>
                    <input id="cb-timespan-week" type="checkbox">
                    </input>
                </h1>
                <h1 onClick={()=> {
                        const box = document.querySelector('#cb-timespan-month')
                        if(box.checked) {
                            box.checked = false
                            
                        } else {
                            box.checked = true
                        }
                    }}
                    className="cursor-pointer p-2 hover:bg-gray-600 rounded-md mt-1 flex justify-between">
                    <label>This Month</label>
                    <input id="cb-timespan-month" type="checkbox">
                    </input>
                </h1>
              </div>
              <div
                className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-gray-700 text-white"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
              </div>
            </div>
    )
}

export default Sidebar