import tick from "../assets/tick.png";
import dashBoard from "../assets/dashboard.png";
import back from "../assets/back.png";
import config from "../assets/config.svg"


export default function SideBar() {

    return(
        <div className="h-full w-[80px] flex flex-col items-center justify-between border-r border-customBorder">
            <div className="flex flex-col items-center">
                <img src={tick} alt="tick" className="w-[37.22px] py-[21px] mb-[21px] border-b border-customBorder"/>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={dashBoard} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={config} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={dashBoard} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={dashBoard} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={dashBoard} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
                <div className="flex flex-col items-center py-[11px]">
                    <img src={dashBoard} className="size-[15px] my-[8px]"/>
                    <span className="text-small text-textPrimary">Dashboard</span>
                </div>
            </div>
            <button className="border border-customBorder rounded-lg p-3 mb-5"><img src={back} alt="back" /></button>
        </div>
    )
}