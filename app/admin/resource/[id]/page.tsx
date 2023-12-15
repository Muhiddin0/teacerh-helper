import { RiDeleteBin6Line } from "react-icons/ri";
import { ResourceItems } from '../../../moderator/my-resource/[id]/resource-items/resource-items'
import { moderatorResourceMedias } from '../../../moderator/my-resource/[id]/resource-items/resource-items.items'

const ResourceShow = () => {
  return (
    <div className="">
      <h1 className="text-3xl">Test Resource</h1>

      <div className="flex items-end gap-1 mt-4">
        <h1 className="text-xl font-bold">Mavzu: </h1>
        <p>O‘zgaruvchi miqdorlar orttirmalarining nisbati va uning ma’nosi. Urinma ta’rifi. Funksiya orttirmasi</p>
      </div>


      <div className="mt-4">
        <b className="text-xl">Resource</b>
        <ul className="pl-4">
          <li className="flex gap-1">
            <b>Sinf:</b>
            <p>5-sinf</p>
          </li>
          <li className="flex gap-1">
            <b>Chorak:</b>
            <p>1-chorak</p>
          </li>
          <li className="flex gap-1">
            <b>Fan:</b>
            <p>German language</p>
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <b className="text-xl">User</b>
        <ul className="pl-4">
          <li className="flex gap-1">
            <b>Ismi:</b>
            <p>Samandar</p>
          </li>
          <li className="flex gap-1">
            <b>Familyasi:</b>
            <p>Azamov</p>
          </li>
          <li className="flex gap-1">
            <b>Email:</b>
            <p>moderator@gmail.com</p>
          </li>
        </ul>
      </div>

      <h1 className="mt-8">Sizning hujjatlaringiz</h1>
      <ResourceItems items={moderatorResourceMedias} />

      <div className="w-full flex justify-end gap-3 mt-6">
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

export default ResourceShow;