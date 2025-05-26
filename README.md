# Around The US: React

Este proyecto es una aplicación web construida con **React** que permite a los usuarios visualizar una galería de tarjetas, agregar nuevas, dar "me gusta", eliminar y editar su información de perfil y avatar. La aplicación consume una **REST API** externa para gestionar datos de usuarios y tarjetas.

## Características principales

- Consumo de API para obtener, crear y eliminar tarjetas.
- Actualización de perfil de usuario y avatar.
- Sistema de "likes" en tarjetas.
- Componentes reutilizables para `Header`, `Main` y `Footer`.
- Context API para gestionar y distribuir el estado del usuario actual.
- Manejo de modales (popups) para edición de perfil, avatar y creación de nuevas tarjetas.
- Hooks de React (`useState`, `useEffect`) para manejo del estado y efectos secundarios.
- Separación lógica por componentes y servicios (`/contexts`, `/utils`, etc.).

## Estructura del código

- `App.jsx`: Componente principal que contiene la lógica del estado global, llamadas a la API y el enrutamiento de la aplicación.
- `utils/api.js`: Archivo que contiene una clase para hacer peticiones HTTP a la API.
- `contexts/CurrentUserContext.js`: Contexto para compartir los datos del usuario en toda la app.
- `components/Main`: Contiene la lógica de renderizado de tarjetas y popups.

## Tecnologías utilizadas

- React (con Hooks y Context API)
- JavaScript (ES6+)
- HTML5 & CSS3
- REST API
- Vite

## Próximos pasos

- Integración de autenticación y autorización con JWT.
- Validaciones de formularios con mensajes de error.
- Deploy en GitHub Pages o Vercel.
- Mejora de diseño y experiencia de usuarios.