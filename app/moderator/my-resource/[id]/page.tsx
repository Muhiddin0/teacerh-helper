import { ResourceItems } from "./resource-items/resource-items";
import { moderatorResourceMedias } from './resource-items/resource-items.items'

// icons
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";

const Show = () => {
  return (
    <div className="">
      <h1 className="text-3xl">Test Resource</h1>

      <div className="flex items-end gap-1 mt-4">
        <h1 className="text-xl font-bold">Mavzu: </h1>
        <p>O‘zgaruvchi miqdorlar orttirmalarining nisbati va uning ma’nosi. Urinma ta’rifi. Funksiya orttirmasi</p>
      </div>

      <ul className="mt-2">
        <li>
          <b>Sinifi: </b>
          <span>5</span>
        </li>
        <li>
          <b>Chorak: </b>
          <span>1</span>
        </li>
        <li>
          <b>Fani: </b>
          <span>German language</span>
        </li>
      </ul>


      <h1 className="mt-8">Sizning hujjatlaringiz</h1>
      <ResourceItems items={moderatorResourceMedias} />

      <div className="w-full flex justify-end gap-3 mt-6">
        <button
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <MdOutlineModeEdit />
          Taxrirlash
        </button>
        <button
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-danger py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
        >
          <RiDeleteBin6Line />
          O'chirish
        </button>
      </div>
    </div>
  );
}

export default Show;