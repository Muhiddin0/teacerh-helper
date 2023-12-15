import { SectionTitle } from "@/components/section-title/section-title";
import { ResourceItems, moderatorResourceItems } from './components'

import { TableThree } from './components/table/table'

const ModeratorResorce = () => {
  return (
    <div>
      <TableThree items={moderatorResourceItems} />
    </div>
  );
}

export default ModeratorResorce;