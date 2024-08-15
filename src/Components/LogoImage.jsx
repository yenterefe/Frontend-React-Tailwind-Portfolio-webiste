
import Logo from "../Image/Logo.jpg"

export default function LogoImage() {
    return (
        <>
            <div className="avatar" >
                <div className="ring-neutral ring-offset-base-100 w-64 rounded-full ring ring-offset-1">
                    <img src={Logo} alt="Logo image" />
                </div>
            </div >
        </>
    )
}