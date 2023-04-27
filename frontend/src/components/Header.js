import translations from '../../public/assets/translations/Header.json'
import {useRouter} from "next/router";

export default function Header() {
    const { locale } = useRouter()
    const header = translations.header.filter(item => item.locale === locale)

    return (
        <header>
            <h1>{ header[0].content }</h1>
        </header>
    )
}