// Anonymous preview is available only in the development server.
export const isLocalPreview = import.meta.env.DEV && import.meta.env.VITE_LOCAL_PREVIEW === 'true'
