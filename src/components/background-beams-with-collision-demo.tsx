import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Logo } from "@/components/ui/logo";

export default function BackgroundBeamsWithCollisionDemo() {
    return (
        <BackgroundBeamsWithCollision>
            <div className="flex flex-col items-center w-full px-4">
                <Logo className="mb-8" />
                <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                    Nos estamos actualizando
                    <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                        <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r lg:py-4 from-brand-primary via-brand-primary to-brand-primary [text-shadow:0_0_rgba(0,0,0,0.1)]">
                            <span className="">Muy pronto estaremos de vuelta.</span>
                        </div>
                        <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-brand-primary via-brand-primary to-brand-primary lg:py-4">
                            <span className="">Muy pronto estaremos de vuelta.</span>
                        </div>
                    </div>
                </h2>
                <div className="mt-8 text-center text-base md:text-lg dark:text-white">
                    ¿Tienes dudas o un proyecto en mente? Escríbenos:<br />
                    <a href="mailto:info@bytesandbuilds.com" className="underline">info@bytesandbuilds.com</a>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
