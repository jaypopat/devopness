import { defineDocs } from 'fumadocs-mdx/config';  // ← defineDocs, NOT defineCollections

export default defineDocs({
  docs: {
    schema: undefined,  // No validation
  },
});
