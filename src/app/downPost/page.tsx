import Image from "next/image"
export default function DownPost(){
    return(
        <div className="Parentdown">
            <div className="Childdown">
                <video autoPlay loop muted className="video">
                    <source src="/video.mp4" type="video/mp4"/>
                    Your Browser Doesnt Support The Video Tag
                </video>

            </div>
            <div className="Childdown">
                <video autoPlay loop muted className="video">
                    <source src="/video2.mp4" type="video/mp4"/>
                    Your Browser Doesnt Support The Video Tag
                </video>

            </div>

        </div>
    )
}