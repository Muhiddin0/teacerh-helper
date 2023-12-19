import { MdOutlineEdit } from "react-icons/md";


const Quarter = () => {
  return (
    <div>
      {/* <!-- Input Fields --> */}
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col gap-5.5 p-6.5">
          <div>
            <label className="mb-3 block text-black dark:text-white">
              Yangi chorak qo&apos;shish
            </label>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder=" Yangi chorak qo'shish"
                className="flex-grow-[2] rounded-lg border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
              />

              <button
                className="inline-flex h-full items-center justify-center bg-primary py-3 px-3 rounded-md text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
              >
                Create
              </button>
            </div>

          </div>

          <div>
            <div className="flex gap-2">
              <input type="checkbox" name="" id="" />
              <label htmlFor="">
                <h1>Hammasini tanlash</h1>
              </label>
            </div>
            <ul className="flex flex-col gap-2 pl-3">
              <li className="flex items-center gap-2">
                <input type="checkbox" name="" id="qurater-1" />
                <label htmlFor="#qurater-1">
                  <input type="text" value={"1-chorak"} disabled />
                </label>
                <button className="p-2 rounded-full bg-primary">
                  <MdOutlineEdit />
                </button>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" name="" id="qurater-1" />
                <label htmlFor="#qurater-1">
                  <input type="text" value={"1-chorak"} disabled />
                </label>
                <button className="p-2 rounded-full bg-primary">
                  <MdOutlineEdit />
                </button>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" name="" id="qurater-1" />
                <label htmlFor="#qurater-1">
                  <input type="text" value={"1-chorak"} disabled />
                </label>
                <button className="p-2 rounded-full bg-primary">
                  <MdOutlineEdit />
                </button>
              </li>
            </ul>

            <button
              className="inline-flex mt-4 items-center justify-center bg-primary py-2 px-3 rounded-md text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            >
              Delete
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Quarter;