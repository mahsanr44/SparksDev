import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <Wrapper>
            <footer className="  mt-36">
                <div className="grid grid-cols-2 gap-5 px-4 py-6 md:space-x-16  lg:py-8 md:grid-cols-4">
                    <div>
                        <div className="max-w-fit">
                            <Link href={"/"} >
                                <h3 className="font-sans  font-bold  mb-6"> SparksDev </h3>
                            </Link>
                        </div>
                        <div className="flex  mb-5 border  w-fit">
                            <input type="text" placeholder="Enter your email" className="px-1  h-6 w-20 md:h-7 lg:h-8 lg:w-40 md:w-28" />
                            <button className='bg-primary  text-white font-sans font-semibold text-sm  px-2 lg:px-5'>{"Submit"}</button>
                        </div>
                        <p > Murree Road London, The Great Britain NW1 8JR, UK</p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase ">Company</h2>
                        <ul className="font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold  uppercase ">Help center</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase ">Legal</h2>
                        <ul className=" font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" shadow-gray-300 bg-[#bbb]  text-black p-2  text-center font-bold">
                    Designed with ❤️ By
                    <Link href={"https://github.com/mahsanr44"} className="text-green-600"> Ahsan</Link>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;