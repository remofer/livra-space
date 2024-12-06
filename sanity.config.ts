import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

export default defineConfig({
  title: 'Livra Space',

  projectId: 'q93yyr8b',
  dataset: 'livraspace',
  apiVersion: '2024-12-01',
  basePath: '/admin',
  plugins: [deskTool()],
  schema:{
    types: schemas
  },
});
