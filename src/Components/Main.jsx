import LogoImage from "./LogoImage"

export default function Main() {
    return (
        <>
            <div className="flex flex-row bg-gray-50 rounded-2xl p-32">
                <div className="flex-1 basis-1/3">
                    <LogoImage />
                </div>
                <div className="flex-1 basis-2/5 ml-4">
                    <h3>
                        Hello! My name is Yen, and I am a Full Stack and Unity Developer. I am passionate about programming and have been honing my skills for the last four years. My experience includes front-end, back-end, and full-stack applications, creating XR applications, and developing free-to-play mobile games in Unity. Please visit my <a className="text-blue-600 underline hover:text-blue-800" href="https://github.com/yenterefe?tab=repositories" target="_blank">GitHub</a> repo to see the projects I have worked on, and to checkout my free-to-play game at <a className="text-blue-600 underline hover:text-blue-800" href="https://zazen-yen.itch.io/the-salary-man" target="_blank">itch.io</a> and on <a href="https://play.google.com/store/apps/details?id=com.BlahBlahStudio.SalaryMan&pcampaignid=web_share" target="_blank">Google Play Store</a>.
                        I am currently enhancing my full-stack skills at <a className="text-blue-600 underline hover:text-blue-800" href="https://www.colorcodedlabs.com/" target="_blank">Color Coded Labs. </a>
                    </h3>
                </div>
            </div >
        </>
    )
}