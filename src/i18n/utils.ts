import { ui, defaultLang } from "./ui"

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/")
  if (lang in ui) return lang as keyof typeof ui
  return defaultLang
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]
  }
}

export function getRouteFromUrl(url: URL): string | undefined {
  const pathname = url.pathname
  const parts = pathname?.split("/")
  const path = parts.pop() || parts.pop()

  if (path === url.pathname) {
    return undefined
  }

  return path
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: keyof typeof ui = lang) {
    const pathName = path.replaceAll("/", "")
    const hasTranslation = defaultLang !== l && ui[l] !== undefined
    const translatedPath = hasTranslation ? `/${l}/${pathName}` : `/${pathName}`

    return translatedPath
  }
}
