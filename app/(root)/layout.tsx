import Footer from "@/components/global/Footer";
import React from "react";
export default function Layout({children}  : {children : React.ReactNode}){
    return(
        <div>
            {children}
            <Footer />
        </div>
    )
}