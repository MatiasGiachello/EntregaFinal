# Mates del Sur — TP Final (Desarrollo de Software 3)

Sitio web estático (Opción 1: HTML5 + CSS3) de una tienda ficticia de mates.

## Estructura

```
tp-final-html-css/
├── index.html        → Página de inicio
├── productos.html    → Catálogo de productos
├── contacto.html     → Formulario de contacto
├── css/
│   └── estilos.css   → Única hoja de estilos (vinculada en las 3 páginas)
└── img/              → Imágenes del sitio
```

### Cómo cumple los requisitos

| Requisito | Dónde |
|---|---|
| Mínimo 2 páginas HTML | 3 páginas: `index.html`, `productos.html`, `contacto.html`, enlazadas entre sí con un menú |
| Hoja de estilos vinculada | `<link rel="stylesheet" href="css/estilos.css">` en el `<head>` de cada página |
| Separación estructura / presentación | El HTML no tiene atributos `style` ni etiquetas `<style>`; todo el diseño está en `estilos.css` |
| Buenas prácticas CSS | Variables (`:root`), reset, nombres de clases con convención BEM, secciones comentadas, Flexbox/Grid y diseño responsive con `@media` |
| HTML5 semántico | `header`, `nav`, `main`, `section`, `article`, `footer`, `form` con `label` |

---

## Pasos para subir el sitio a GitHub

### 0. Requisitos previos (una sola vez)

1. Crear una cuenta en <https://github.com>.
2. Instalar Git: <https://git-scm.com/downloads> (en Windows, dejar todas las opciones por defecto).
3. Abrir una terminal (en Windows: **Git Bash**) y configurar tu nombre y mail:

   ```bash
   git config --global user.name "Tu Nombre"
   git config --global user.email "tu-mail@ejemplo.com"
   ```

### 1. Crear el repositorio en GitHub

1. Entrar a GitHub → botón **New** (o el **+** arriba a la derecha → *New repository*).
2. **Repository name:** por ejemplo `tp-final-html-css`.
3. Dejarlo en **Public** (necesario para GitHub Pages gratis).
4. **No** tildar "Add a README" (ya tenemos uno).
5. Clic en **Create repository**. Copiá la URL que aparece, del estilo
   `https://github.com/TU-USUARIO/tp-final-html-css.git`.

### 2. Subir los archivos desde tu computadora

Abrí la terminal **dentro de la carpeta del proyecto** (en Windows: clic derecho sobre la carpeta → *Open Git Bash here*) y ejecutá:

```bash
git init
git add .
git commit -m "Primer commit: sitio Mates del Sur"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/tp-final-html-css.git
git push -u origin main
```

La primera vez te va a pedir iniciar sesión en GitHub (se abre una ventana del navegador). Refrescá la página del repo y vas a ver los archivos.

> **Alternativa sin terminal:** en la página del repositorio vacío, clic en *uploading an existing file*, arrastrá **todo el contenido** de la carpeta (incluidas las carpetas `css` e `img`) y clic en **Commit changes**.

### 3. Publicar el sitio con GitHub Pages

1. En el repositorio: **Settings** → **Pages** (menú de la izquierda).
2. En *Build and deployment* → **Source:** `Deploy from a branch`.
3. **Branch:** `main` y carpeta `/ (root)` → **Save**.
4. Esperá 1 o 2 minutos y recargá: arriba aparece el link del sitio, del estilo
   `https://TU-USUARIO.github.io/tp-final-html-css/`.

> Importante: `index.html` tiene que estar en la raíz del repositorio para que el link abra la página de inicio.

### 4. Cuando hagas cambios

```bash
git add .
git commit -m "Describí brevemente el cambio"
git push
```

GitHub Pages se actualiza solo en uno o dos minutos.

### 5. Entrega

Entregá los dos links:
- **Repositorio:** `https://github.com/TU-USUARIO/tp-final-html-css`
- **Sitio publicado:** `https://TU-USUARIO.github.io/tp-final-html-css/`

---

### Problemas comunes

| Problema | Solución |
|---|---|
| El sitio se ve sin estilos | Revisar que la carpeta `css` se haya subido y que la ruta sea `css/estilos.css` (respeta mayúsculas/minúsculas). |
| Las imágenes no cargan | Mismo caso: en GitHub `Mate.jpg` y `mate.jpg` son archivos distintos. |
| GitHub Pages muestra 404 | Esperar unos minutos y confirmar que `index.html` está en la raíz, no dentro de una subcarpeta. |
| `error: remote origin already exists` | `git remote set-url origin https://github.com/TU-USUARIO/tp-final-html-css.git` |
| `failed to push some refs` | `git pull origin main --rebase` y después `git push` de nuevo. |
