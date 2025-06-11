# VerificarEmails - Validación individual

Este actor permite validar un correo electrónico individual usando la API de [VerificarEmails.com](https://verificaremails.com).

## 🚀 ¿Qué hace?

Llama a esta API:

```
https://dashboard.verificaremails.com/myapi/email/validate/single?term=EMAIL
```

y devuelve la respuesta JSON con la información del email: existencia, estado del dominio, tipología, etc.

---

## 📥 Input

```json
{
  "email": "ejemplo@correo.com"
}
```

Campo obligatorio: `email`.

---

## 📤 Output

El resultado será un JSON como este:

```json
{
  "email": "ejemplo@correo.com",
  "format_valid": true,
  "mx_found": true,
  "smtp_check": true,
  "score": 96
}
```

> Consulta la documentación completa en:  
> [https://dashboard.verificaremails.com/documentation/openai.json?v=8](https://dashboard.verificaremails.com/documentation/openai.json?v=8)

---

## 📦 Instalación local (opcional)

```bash
npm install
npm start
```

---

## 🧩 Publicación

Puedes subir este repositorio a GitHub y luego importarlo en Apify desde:  
👉 https://console.apify.com/actors → "Import from GitHub"

---

## 💬 Soporte

Este actor está mantenido por el equipo de [VerificarEmails.com](https://verificaremails.com)  
Para dudas o mejoras, abre un *issue* o contáctanos.
