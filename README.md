# 📝 My English Blog — Plantilla para EV03 · Guía 4 · SENA ADSO

> **Plantilla de blog en inglés** creada para el programa ADSO · SENA.  
> Desarrollada con HTML, CSS y JavaScript básico.

---

## 🚀 ¿Qué es esto?

Esta es la plantilla base de tu blog personal en inglés para la evidencia **EV03** de la Guía 4.  
Ya tiene el diseño listo — tú solo tienes que **editar el contenido** y publicarlo en GitHub Pages.

---

## 📁 Archivos del proyecto

```
blog-template/
│
├── index.html   ← La página principal (aquí va todo el contenido)
├── style.css    ← Los estilos y colores del blog
├── script.js    ← JavaScript básico (menú, scroll, animaciones)
└── README.md    ← Este archivo con las instrucciones
```

---

## ✏️ ¿Qué debes cambiar?

Busca en `index.html` los comentarios que dicen `<!-- ✏️ CAMBIA:` y reemplaza:

| Qué cambiar | Por qué |
|---|---|
| `[Tu Nombre]` | Tu nombre completo |
| `[TN]` | Tus iniciales (para el avatar) |
| `[tu-usuario]` | Tu usuario de GitHub |
| `[tu-correo]` | Tu correo electrónico |
| El texto de About me | Tu presentación personal en inglés |
| Los posts 2, 3, 4, 5 | Tus entradas del blog en inglés |

---

## 📋 Requisitos del EV03

Tu blog debe tener:

- ✅ Entre **5 y 7 posts** escritos en inglés
- ✅ Post obligatorio sobre **Critical Thinking & Media Literacy**
- ✅ Post obligatorio sobre **Crime and Punishment**
- ✅ Uso de **adjective clauses** (who / which / that)
- ✅ Uso de **tag questions** (isn't it? / don't you?)
- ✅ Uso de **so / neither / either / too**
- ✅ Blog publicado y accesible (URL pública)

---

## 🛠️ Cómo usar esta plantilla — Paso a paso

### Paso 1 · Crear cuenta en GitHub
1. Ve a [github.com](https://github.com)
2. Haz clic en **Sign up**
3. Crea tu cuenta con tu correo
4. Verifica tu correo

### Paso 2 · Hacer Fork del repositorio
1. Abre el repositorio del instructor en GitHub
2. Haz clic en el botón **Fork** (arriba a la derecha)
3. Esto crea una copia del proyecto en **tu cuenta**

### Paso 3 · Editar los archivos
**Opción A — Editar directamente en GitHub:**
1. Abre tu repositorio
2. Haz clic en `index.html`
3. Haz clic en el ícono de lápiz ✏️ (Edit)
4. Busca los `[Tu Nombre]` y reemplázalos con tu información
5. Haz clic en **Commit changes**

**Opción B — Editar con VS Code (recomendado):**
1. Descarga el repositorio: botón **Code → Download ZIP**
2. Descomprime y abre la carpeta en VS Code
3. Edita los archivos
4. Sube los cambios a GitHub

### Paso 4 · Publicar con GitHub Pages
1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (configuración)
3. En el menú izquierdo busca **Pages**
4. En **Source** selecciona: `main` branch → `/ (root)`
5. Haz clic en **Save**
6. Espera 1-2 minutos
7. Tu blog estará publicado en:  
   `https://[tu-usuario].github.io/[nombre-del-repositorio]/`

### Paso 5 · Entregar la URL
- Copia la URL de tu blog publicado
- Pégala en el documento de entrega del EV03

---

## 💡 Tips para editar los posts

Cada post tiene esta estructura en el HTML:

```html
<article class="post-card">
  <div class="post-tag">Nombre de la categoría</div>
  <h3 class="post-title">El título de tu post</h3>
  <p class="post-date">📅 Fecha</p>
  <div class="post-body">
    <p>Primer párrafo...</p>
    <p>Segundo párrafo...</p>
  </div>
</article>
```

Para **agregar un nuevo post**, copia ese bloque completo y pégalo en la sección `posts-grid`.

---

## 🎨 ¿Cómo cambiar los colores?

Abre `style.css` y edita las variables al inicio del archivo:

```css
:root {
  --primary: #1B5E20;  /* Color principal */
  --accent:  #39A900;  /* Color de acento */
}
```

Cambia los códigos de color por los que prefieras.

---

## ❓ Preguntas frecuentes

**¿Debo saber mucho de programación?**  
No. Solo necesitas saber copiar, pegar y reemplazar texto en el HTML.

**¿Puedo cambiar el diseño?**  
Sí. Edita `style.css`. Pero no es obligatorio — el diseño ya está listo.

**¿Qué pasa si cometo un error?**  
Puedes volver al paso anterior en GitHub haciendo clic en el historial de commits.

**¿El blog debe estar en inglés?**  
Sí. Todos los posts deben estar escritos en inglés.

---

## 📅 Fecha límite de entrega

> **⏰ Miércoles 9 de abril — EV03 Blog en inglés**

---

## 👨‍🏫 Instructor

**Christiam Manuel Puentes Leal**  
Instructor de Inglés · SENA ADSO  
Atención: Lunes a viernes · 2:00 p.m. – 6:00 p.m.
