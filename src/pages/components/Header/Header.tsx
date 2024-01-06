import { GetStartButton } from "../../../components/Button/GetStartButton"
import Dashboard from "../../../assets/Dashboard.png"

type Props = {
    title?: string;
    detail?: string;
}

export const Header = ({ title, detail }: Props) => {
    return (
        <div className='flex justify-center items-center py-20 px-40 bg-gray-900 w-full h-max'>
            <div className="flex flex-row gap-2">
                <div className='flex flex-col justify-center gap-10'>
                    <div className='text-5xl text-white font-bold'>
                        {title || "Main big title here"}
                    </div>
                    <div className='text text-white'>
                        {detail || `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                    </div>
                    <div className="w-[180px]">
                        <GetStartButton />
                    </div>
                </div>

                <div className="p-2 bg-gray-800 rounded-2xl">
                    <img src={Dashboard} />
                </div>
            </div>
        </div>
    )
}