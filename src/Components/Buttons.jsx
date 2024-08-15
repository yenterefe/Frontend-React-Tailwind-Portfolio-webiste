
export default function Buttons() {
    return (
        <>
            <div className=" bg-gray-200 rounded-2xl p-14">
                <a href="https://github.com/yenterefe" target="_blank">
                    <button className="btn btn-circle btn-md p-10 mx-4 py-2 border-1 border-black">GitHub</button>
                </a>
                <a href="https://www.linkedin.com/in/yeneneh-g-terefe-a1981376/" target="_blank">
                    <button className="btn btn-circle btn-md p-10 mx-4 py-2 border-1 border-black">LinkedIn</button>
                </a>

                <a href="mailto:yenterefe@gmail.com" target="_blank">
                    <button className="btn btn-circle btn-md p-10 mx-4 py-2 text-xl border-1 border-black">✉</button>
                </a>
            </div>
        </>
    )
}