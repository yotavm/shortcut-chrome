import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { crx } from "@crxjs/vite-plugin";
import {plugin as mdPlugin, Mode} from 'vite-plugin-markdown'
import manifest from './manifest.json'


const mdoptions = {
  mode:[Mode.HTML],
  markdown:(body:string) =>{return body},
}


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest }), mdPlugin(mdoptions)]
})
