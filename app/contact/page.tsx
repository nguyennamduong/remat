import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Contact() {
    return (
        <div className="p-6 flex flex-col lg:flex-row gap-6">
            <div className="flex gap-3 w-full">
                <Image
                    className="h-56 w-56 rounded-2xl object-cover"
                    alt="Marvin"
                    src="/marvin.jpg"
                    width={500}
                    height={500}
                />
                <div className="flex flex-col gap-2">
                    <p className="text-primary text-2xl font-bold uppercase">
                        Marvin M. Muzzarelli
                    </p>
                    <p>President/co-owner</p>
                    
                    <p className="flex gap-3"><Phone /> <span>(810) 459-7985</span></p>
                    <p className="flex gap-3"><Mail /> <a href="mailto:marvinmuzzarelli@rematllc.com">marvinmuzzarelli@rematllc.com</a></p>
                </div>
            </div>
            <div className="flex gap-3 w-full">
                <Image
                    className="h-56 w-56 rounded-2xl object-cover"
                    alt="Romer"
                    src="/romer.jpg"
                    width={500}
                    height={500}
                />
                <div className="flex flex-col gap-2">
                    <p className="text-primary text-2xl font-bold uppercase">
                        Romer G. Muzzarelli
                    </p>
                    <p>Vice-president/co-owner</p>
                    <p className="flex gap-3"><Phone /> <span>(586) 265-1957</span></p>
                    <p className="flex gap-3"><Mail /> <a href="mailto:marvinmuzzarelli@rematllc.com">romermuzzarelli@rematllc.com</a></p>
                </div>
            </div>
        </div>
    )
}