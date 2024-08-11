import {defineField, defineType} from 'sanity'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      description: (
        <details>
          <summary>Why is this important?</summary>
          The Googlebot is an indexer of...
        </details>
      ),
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'name',
    },
    prepare: ({title}) => ({
      title,
      subtitle: 'Artist',
      media: <span>🎨</span>,
    }),
  },
})
