# Proyecto componentes de pc

Este es un proyecto creado con el fin de entretenerme mientras lo creo y de aprender a crear una aplicación completa, tanto frontend como backend, de forma autónoma.


### Tecnologías utilizadas

- Astro
- Astro DB
- Turso
- React
- Tailwind
- Typescript


### Comandos npm (el proyecto está hecho con pnpm)

- dev: Levanta el proyecto en localhost:4321.
- dev-remote: Levanta el proyecto en localhost:4321 y se conecta a la base de datos de turso.
- build: "Compila" el proyecto para poder desplegarlo.
- astro db push --remote: Actualiza la base de datos de turso.
- astro db push --remote --force-reset: Reinicia la base de datos

```console
pnpm dev
pnpm dev-remote
pnpm build
pnpm astro db push --remote
pnpm astro db push --remote --force-reset
```