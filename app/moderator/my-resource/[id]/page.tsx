import { ResourceItems } from "./resource-items/resource-items";
import { moderatorResourceMedias } from './resource-items/resource-items.items'

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
    </div>
  );
}

export default Show;