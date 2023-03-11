import { Indie_Flower } from "@next/font/google"

const indie = Indie_Flower({subsets: ['latin'], weight: "400"})

export default function Indie({children}) {
    return(
        <div className={indie.className}>{children}</div>
    )
}