import {staticRequest} from "./modules-15a52e2940ed593e/search/transport.mjs";
import { initEditorPaper } from "./modules-15a52e2940ed593e/editor-paper.js?v=20261028paperstrength2";
import { initUI } from "./modules-15a52e2940ed593e/ui.js";
import { poems } from "./modules-15a52e2940ed593e/poems.js";
import { createStore } from "./modules-15a52e2940ed593e/storage.js";
import { createEditor } from "./modules-15a52e2940ed593e/editor.js?v=20261028batch5a";
import { initCollection } from "./modules-15a52e2940ed593e/collection.js";
import { initLibrary } from "./modules-15a52e2940ed593e/library.js?v=20261028batch5a";
import { createTypography, initTypography } from "./modules-15a52e2940ed593e/typography.js";
import { createFontLoader } from "./modules-15a52e2940ed593e/fonts.js?v=20261028author1";
import { createAppearance } from "./modules-15a52e2940ed593e/appearance.js?v=20261028paperstrength2";
import { createImage } from "./modules-15a52e2940ed593e/image.js?v=20261028author1";

// Initialize services, then controllers; callbacks connect sibling modules.
initUI();
const store = createStore(poems[0]);
const typography = createTypography();
const editor = createEditor({ store, typography });
const library = initLibrary({ editor, typography, searchRequest: staticRequest });
initCollection({ editor, store, typography });
const fonts = createFontLoader({ getState: () => editor.state, typography });
let image, editorPaper;
const appearance = createAppearance({
  drawImagePreview: () => image?.drawImagePreview(),
  updateFontPreview: () => image?.updateFontPreview(),
  onPaperChange: () => editorPaper?.refresh(),
  onSourceSizeChange: (size) => image?.setImageSize(size),
});
image = createImage({ editor, typography, fonts, appearance });
editorPaper = initEditorPaper({ appearance });
initTypography({
  typography,
  onChange: () => {
    editor.render();
    library.renderLibrary();
  },
});
editor.render();
appearance.init();
try {
  image.setImageSize(
    Number(
      localStorage.getItem("shiju-source-size") ??
        localStorage.getItem("shiju-image-size"),
    ) || 23,
  );
} catch {}
