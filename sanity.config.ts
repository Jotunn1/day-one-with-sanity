import {defineConfig, buildLegacyTheme} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {presentationTool} from 'sanity/presentation'

const SANITY_STUDIO_PREVIEW_URL = process.env.SANITY_STUDIO_PREVIEW_URL || 'http://localhost:3000'

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: '1rw1zmhf',
  dataset: 'development',

  plugins: [
    structureTool({structure, defaultDocumentNode}),
    visionTool(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: `${SANITY_STUDIO_PREVIEW_URL}/api/draft-mode/enable`,
        },
      },
    }),
  ],
  schema: {
    types: schemaTypes,
  },
})
