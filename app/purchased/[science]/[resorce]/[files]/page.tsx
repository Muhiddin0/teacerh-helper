import { SectionTitle } from "@/components/section-title/section-title";
import { FileSection } from "./components";

import { fileItems } from './file-section.items'

const Files = () => {
  return (
    <div>
      <SectionTitle title="Resource" />

      <div className="fex flex-col gap-6">
        <FileSection items={fileItems} ftype="Slide" />
        <FileSection items={fileItems} ftype="Video" />
        <FileSection items={fileItems} ftype="Grafic" />
      </div>
    </div>
  );
}

export default Files;