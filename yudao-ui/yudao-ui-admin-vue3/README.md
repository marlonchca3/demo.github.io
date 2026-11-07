# Interfaz local de Administración Yudao

Interfaz Vue 3 en español. La vista de desarrollo abre el panel directamente, sin pantalla de acceso, y muestra Inicio y Estadísticas con datos de ejemplo.

Desde la raíz del repositorio:

```sh
npm run setup:ui
npm run dev
```

Requisitos: Node.js 20.19 o superior y pnpm 8.6 o superior. Abre http://localhost:5173.

La opción `VITE_LOCAL_PREVIEW=true` de `.env.local` habilita la vista sin acceso únicamente en desarrollo. No crea sesiones ni modifica la autenticación del servidor Java. Para conectar un servidor real, desactívala y configura `VITE_BASE_URL`.

La generación de PDF con JasperReports todavía no está implementada.

Código de interfaz basado en https://github.com/yudaocode/yudao-ui-admin-vue3, revisión a33cdfd565edae4f866901bf6105c7087b0697c4. Se conservan su licencia y los archivos MES originales de este repositorio.

## Referencia original

基于 Vue3 + element-plus 实现的管理后台。仓库地址：

* Gitee：<https://gitee.com/yudaocode/yudao-ui-admin-vue3>
* GitHub：<https://github.com/yudaocode/yudao-ui-admin-vue3>
