# Aplicación dockerizada de Spring, Cloudinary, React y MySQL

Aplicación de ejemplo para subir imágenes a Cloudinary, usando contenedores Docker.

## Descripción

Spring Boot crea una API REST para subir, listar y eliminar imágenes de Cloudinary. La aplicación se conecta a una base de datos MySQL para guardar los datos de las imágenes.

ReactJS crea una aplicación web para consumir la API REST de Spring Boot.

### Notas

- Este proyecto usa como base el código del repositorio [Cloudinary](https://github.com/nzaeta/Cloudinary) de [@nzaeta](https://github.com/nzaeta), para construir la parte de backend. Se añadió la configuración de CORS y variables de entorno.
- La parte de frontend fue construida desde cero al igual que la configuración de Docker.

### Tecnologías usadas

- Lenguajes de programación: [Java](https://www.java.com/), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Frameworks: [Spring Boot](https://spring.io/projects/spring-boot), [React](https://react.dev/)
- Base de datos: [MySQL](https://www.mysql.com/)
- Gestión de base de datos: [phpMyAdmin](https://www.phpmyadmin.net/)
- Servicio de almacenamiento de imágenes: [Cloudinary](https://cloudinary.com/)
- Contenedores: [Docker](https://www.docker.com/)
- Entorno de desarrollo: [VSCode](https://code.visualstudio.com/) con [dev containers](https://code.visualstudio.com/docs/remote/containers) en [Zorin OS](https://zorinos.com/)

## Cómo usar

Necesitas tener instalado [Docker](https://www.docker.com/), la forma más fácil de instalarlo es usando [Docker Desktop](https://www.docker.com/products/docker-desktop).

1. Clona este repositorio e ingresa a la carpeta/directorio

```bash
git clone git@github.com:jhordyess/spring-cloudinary-react-mysql.git
```

2. Crea un archivo `.env` en la carpeta raíz siguiendo como ejemplo el archivo [`.env.example`](./.env.example). Recuerda añadir las credenciales de tu cuenta de Cloudinary.

3. Luego, ejecuta el siguiente comando:

```bash
make

# Si no tienes 'make' instalado, usa:
docker compose up -d
```

4. Después, abre el navegador en <http://localhost/>

5. Para remover los contenedores, ejecuta el siguiente comando:

```bash
make clean

# Si no tienes 'make' instalado, usa:
docker compose down -v
```

Tenga en cuenta que los scripts de producción son solo de muestra, y puede requerir algunos ajustes para su uso en producción real.

## Como usar en modo desarrollo

Puedes utilizar los dev containers de VSCode para ejecutar el proyecto en un entorno de contenedores de Docker.

Necesitas tener instalado [Docker](https://www.docker.com/) y [VSCode](https://code.visualstudio.com/), y la extensión [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers).

1. Clona este repositorio

```bash
git clone git@github.com:jhordyess/spring-cloudinary-react-mysql.git
```

2. Abre el proyecto con VSCode

```bash
code spring-cloudinary-react-mysql
```

3. Crea un archivo `.env` en la carpeta raíz siguiendo como ejemplo el archivo [`.env.example`](./.env.example). Recuerda añadir las credenciales de tu cuenta de Cloudinary.

4. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
docker compose -f docker-compose.dev.yml up -d
```

5. Abre la paleta de comandos (Ctrl+Shift+P) y selecciona la opción `Dev Containers: Open folder in Container`.

6. Selecciona la carpeta `backend` y espera a que se prepare el contenedor.

7. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
mvn spring-boot:run
```

8. Para el frontend, abre la paleta de comandos (Ctrl+Shift+P) y selecciona la opción `Dev Containers: Open folder in Container`.

9. Selecciona la carpeta `frontend` y espera a que se prepare el contenedor.

10. Abre la terminal integrada (Ctrl+Shift+`) y ejecuta el siguiente comando:

```bash
npm run dev
```

11. Abre el navegador en <http://localhost:5173/>

12. También puedes visitar <http://localhost:81/> para gestionar la base de datos con phpMyAdmin.

## License

© 2023 [Jhordyess](https://github.com/jhordyess). Under the [MIT](https://choosealicense.com/licenses/mit/) license. See the [LICENSE](./LICENSE) file for more details.

---

Made with 💪 by [Jhordyess](https://www.jhordyess.com/)
