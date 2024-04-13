import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'heroImage',
    title: 'Imagen',
    type: 'document',
    fields: [
        defineField({
            name: 'image1',
            title: 'Imagen 1',
            type:'image',
        }),
        defineField({
            name: 'image2',
            title: 'Imagen 2',
            type: 'image',
        }),
    ],
})