import Nav from "@/components/nav"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Project Page - Muhammad Khoyron Ahlaqul Firdaus",
    description: "A Junior web programmer who loves to explore technology",
}

export default function page() {
    return (
        <>
            <Nav />

            <div className="glow-decorator1" />
            <div className="glow-decorator2" />
        </>
    )
}
