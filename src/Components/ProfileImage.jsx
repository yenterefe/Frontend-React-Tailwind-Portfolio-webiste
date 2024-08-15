import image from "../Image/Yen.jpg"

export default function ProfileImage() {
    return (
        <>
            <div className="avatar" >
                <div className="ring-neutral ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                    <img src={image} alt="profile picture" />
                </div>
            </div>
        </>
    )
}