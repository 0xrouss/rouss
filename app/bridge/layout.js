// app/about/layout.js
import Navbar from "@/components/navbar";
import { Web3Provider } from "@/components/Web3Provider";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "About Page",
    description: "This is the about page",
};

export default function BridgeLayout({ children }) {
    return (
        <section>
            <Web3Provider>
                <Navbar />
                {children}
            </Web3Provider>
        </section>
    );
}
