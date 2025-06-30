"use client"
import Image from "next/image";
import logo from "@/images/logo.png"
import { useState } from "react";
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import { CircleUserRound } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed h-[100px] w-full flex justify-between items-center px-10">

            {/* logo */}
            <div className="flex h-full items-center w-full">

                {/* menu icon */}
                <button className="md:hidden cursor-pointer" onClick={() => setMenuOpen(true)}>
                    <Menu />
                </button>

                <div className="h-full w-full flex justify-center items-center md:justify-start">
                    <Image className="h-full w-auto" src={logo} alt="Logo"></Image>
                </div>
            </div>

            {/* nav for desktop */}
            <nav className="hidden w-1/2 lg:w-1/3 md:flex items-center justify-evenly">
                <div className="text-gray-500 hover:text-cyan-400 cursor-pointer">
                    To-Do
                </div>
                <div className="text-gray-500 hover:text-cyan-400 cursor-pointer">
                    Reminders
                </div>
                <CircleUserRound className="text-cyan-500 cursor-pointer"/>
            </nav>

            {/* sidebar */}
            {menuOpen && (
                <div className="md:hidden w-2/3 bg-cyan-100 absolute z-10 flex flex-col justify-between px-5 h-[100vh] inset-0">
                    <div>
                        <div className="h-[150px] flex items-center justify-between w-full">
                            <Image className="h-full w-auto" src={logo} alt="logo"></Image>
                            <X className="cursor-pointer text-cyan-400" onClick={() => setMenuOpen(false)} />
                        </div>
                        <ul className="pl-5 flex flex-col gap-2 ">
                            <li className=" text-gray-500 hover:text-cyan-400 cursor-pointer w-fit">To-Do</li>
                            <li className="text-gray-500 hover:text-cyan-400 cursor-pointer w-fit">Reminders</li>
                        </ul>
                    </div>
                    <div className="flex gap-2 pb-6 cursor-pointer w-fit">
                        <CircleUserRound className="text-cyan-500"/>
                        <p className="text-gray-500">My account</p>
                    </div>
                </div>
            )}
        </header>
    )
}

export default Header;