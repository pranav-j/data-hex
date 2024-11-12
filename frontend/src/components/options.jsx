import orders from "../assets/orders.png";
import bar from "../assets/bar.png";
import missed from "../assets/missed.png";
import approval from "../assets/approval.png";
import attendence from "../assets/attendence.svg";
import summary from "../assets/summary.svg"

export default function Options() {
    return(
        <div className="w-[264px] p-[20px] h-full border-r border-customBorder">
            <div className="pb-4">
                <h1 className="font-medium text-[12px] pb-1 text-textSecondary">REGISTRATION</h1>
                <ul className="text-textPrimary text-[14px]">
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={orders} alt="orders" className="w-[16.2px] h-[18px]" />Orders</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={bar} alt="Order Summary" className="w-[15px] h-[13.5px]" />Order Summary</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={orders} alt="Attendees" className="w-[16.2px] h-[18px]" />Attendees</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={missed} alt="Missed Registrations" className="w-[11.58px] h-[12.83px]" />Missed Registrations</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={approval} alt="approval" className="w-[14.06px] h-[16.31px]" />Approval</li>
                </ul>
            </div>

            <div className="pb-4">
                <h1 className="font-medium text-[12px] pb-1 text-textSecondary">ATTENDANCE</h1>
                <ul className="text-textPrimary text-[14px]">
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={attendence} alt="orders"/>Attendance</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={summary} alt="Attendance Summary"/>Attendance Summary</li>
                </ul>
            </div>

            <div className="pb-4">
                <h1 className="font-medium text-[12px] pb-1 text-textSecondary">CHECKIN INSTANCE</h1>
                <ul className="text-textPrimary text-[14px]">
                    <li className="flex px-2 py-2 my-1 gap-2 items-center rounded-lg bg-hover"><img src={attendence} alt="orders"/>Instance</li>
                    <li className="flex px-2 py-2 my-1 gap-2 items-center"><img src={summary} alt="Attendance Summary"/>Instance Check-In</li>
                </ul>
            </div>
        </div>
    )
}