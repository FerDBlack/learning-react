# Inciar un proyecto en react vanilla
Cabe recalcar que en esta instalción se usa un plugin, pero, sigue siendo vanilla. En el caso que se quiera realizar una más "pura", se tendría que ver el contenido del propio `defineConfig` de Vite.

## Paquetes

### Para montar el proyecto
---

- Un plugin llamada @vitejs/plugin-react, usamos -E para la versión exacta.

  - `npm install @vitejs/plugin-react -E`

- ¡Importantes! react y react-dom.

  - `npm install react react-dom`

- Genear nuestro fichero de configuración de vite (vite.config.js) con la siguiente configuración.

  - ~~~
    import {defineConfig} from "vite"
    import react from '@vitejs/plugin-react'

    export default defineConfig ({
      plugins: [react()]
    })
    ~~~

### Desarrollo
---
- Como linter usaremos Standard.
  - `npm install standard -D`
## Detalles a tener en cuenta
- Cambiar el `main.js` por `main.jsx`, tanto en el nombre de fichero como en el script del `index.html`, ya que el plugin de vite esta preparado para trabajar con jsx.

- Genear una puerta de entrada donde renderizar nuestra aplicacion con `createRoot`.
