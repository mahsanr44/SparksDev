import Link from "next/link";
import { Wrapper } from "../Shared/Wrapper"
import { ShoppingCartIcon } from "lucide-react";
import DynamicMenu from "./DynamicMenu";
import { cookies } from "next/headers";

const Navbar = async () => {
    return (
        <header className="sticky top-0   backdrop-blur-md bg-opacity-70 z-10">
            <Wrapper>
                <div className=' py-5 mx-10 flex justify-between items-center'>
                    <Link href={"/"}>
                        <h3 className="font-sans  font-bold text-white   "> AhsanR </h3>
                    </Link>
                    <ul className="flex lg:space-x-12 md:space-x-7  mr-10 md:mr-0 ">
                       <DynamicMenu/>
                    </ul>
                   
                   
                </div>

            </Wrapper>
        </header>
    )
}

export default Navbar