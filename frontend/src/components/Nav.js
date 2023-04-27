import Link from "next/link";

import translations from '../../public/assets/translations/Nav.json'
import {useRouter} from "next/router";

export default function Nav() {
    const { locale } = useRouter()

    const nav = translations.nav.filter(item => item.locale === locale)

    return (
        <nav>
            <ul>
                {
                    nav[0].content.map((item, index) => {
                        return (
                            <li key={index}><Link href={{ pathname: item.url }}>{item.title}</Link></li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}