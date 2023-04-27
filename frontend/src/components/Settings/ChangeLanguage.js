import {router} from "next/client";
import {useRouter} from "next/router";

export default function ChangeLanguage() {
    const { locale, locales, defaultLocale } = useRouter()

    return (
        <select
            value={locale}
            onChange={e => router.push(router.pathname, router.pathname, { locale: e.target.value })}
        >
            {locales.map(locale => (
                <option key={locale} value={locale}>
                    {locale}
                </option>
            ))}
        </select>
    )
}