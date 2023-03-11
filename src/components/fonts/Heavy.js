import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ['latin'], weights: [ "900"] });

const Heavy = ({children}) => {
    return (<h1 className={inter.className} style={{fontSize: "5em", fontWeight: "900"}}>{children}</h1>)
}

export default Heavy