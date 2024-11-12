import kerala from "../assets/kerala.png";
import globe from "../assets/global-line.png";
import pencil from "../assets/pencil.png";
import arrow from "../assets/arrow.png";
import downArrow from "../assets/downArrow.png"

export default function TopBar() {
    return(
        <div className="flex justify-between h-[80px] w-full px-[32px] border-b border-customBorder">
            <div className="flex items-center">
                <img src={kerala} alt="kerala" className="w-[50px] h-[25px] px-[6px]"/>
                <div>
                    <h1 className="font-bold">Come On Kerala</h1>
                    <span className="text-textPrimary">Jun 25 Sat,2024 - 8:00 AM (IST)</span>
                </div>
            </div>
            <div className="flex gap-[12px] items-center">
                <button className="p-2"><img src={globe} alt="globe" className="size-[20px]" /></button>
                <button className="p-2"><img src={pencil} alt="pencil" className="size-[20px]" /></button>
                <button className="flex items-center py-[10px] px-[25px]"><img src={arrow} alt="Preview" className="pr-[10px]" />Preview</button>
                <button className="flex items-center gap-3 bg-primary text-white rounded-xl px-4 py-2">Publish <img src={downArrow} alt="Publish" /></button>
            </div>
        </div>
    )
}