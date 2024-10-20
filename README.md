# Zipcode Search API

Esta es una aplicación de servidor **Node.js** desarrollada con **TypeScript** que permite consultar información de códigos postales (zip codes) usando la API pública de **Zippopotam**. La aplicación sigue la arquitectura **MVC**.

## Requisitos previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (versión 18 o superior)
- **npm** (normalmente se incluye con Node.js)
- **Git** (opcional, en caso de clonar el repositorio)

## Instalación

Sigue los siguientes pasos para configurar el proyecto en tu entorno local.

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/zipcode-search-api.git

   ```

2. Accede al directorio del proyecto:
   cd {ruta del repositorio}

3. Una vez en la carpeta del proyecto instala los modulos de node:
   npm install

4. Deberás crear en la raiz de la app un archivo .env con el siguiete codigo:
    ZIP_API_URL="http://api.zippopotam.us/"
    PORT=3000

## Configuración

No se necesita una configuración especial para este proyecto ya que usa la API pública de Zippopotam.

## Scripts

Para compilar el proyecto y generar los archivos JavaScript en la carpeta dist, utiliza:

    npm run build

Una vez que hayas compilado el proyecto, puedes iniciar el servidor ejecutando:

    npm start

Para trabajar en modo desarrollo:

    npm run dev

Este proyecto incluye pruebas con Jest. Para ejecutarlas, usa el siguiente comando:

    npm test
