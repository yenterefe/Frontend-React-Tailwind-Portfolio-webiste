import image from "../Image/Yen.jpg"

export default function NavBar() {
    return (
        <>
            <div className="navbar bg-gray-200 p-10 rounded-2xl">
                <div className="flex-1">
                    <p >Yeneneh Terefe</p>
                </div>
                <div className="flex-1">
                    <p >Full Stack and Unity Developer</p>
                </div>
                <div className="avatar" >

                    <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                        <img
                            src={image} alt="profile picture" />

                    </div>
                </div>

            </div>

        </>
    )
}