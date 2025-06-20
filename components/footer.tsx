import { Mail, MapPin, Phone, Pin } from "lucide-react"

export const Footer = () => {
    return (
        <footer>
            <div
                className="flex flex-col lg:flex-row"
            >
                <iframe
                    className="w-full h-48"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3273.0987158199414!2d-82.13201782417644!3d34.878867373632254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885781566bcd65b5%3A0xe85793e064fa0ea8!2s100%20Fortis%20Dr%2C%20Duncan%2C%20SC%2029334!5e0!3m2!1sen!2sus!4v1694221647179!5m2!1sen!2sus"
                />
                <div
                    className="bg-foreground text-background w-full p-4 flex flex-col justify-around min-h-48"
                >
                    <p className="flex gap-3"><MapPin className="text-primary" /> 100 Fortis Dr., Duncan, SC 29334</p>
                    <p className="flex gap-3"><Phone className="text-primary"/> ( +71 7986543234 )</p>
                    <p className="flex gap-3"><Mail className="text-primary"/> email@email.com</p>
                </div>
            </div>
            <div className="bg-primary text-primary-foreground p-3 text-center">Copyright © 2023. All Right Reserved.</div>
        </footer>
    )
}