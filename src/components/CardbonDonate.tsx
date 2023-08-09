import { useState } from "react";

type CarbonDonateProps = {
    distance: number;
    onDonatedCarbon: (donatedCarbon: boolean) => void;
};

const CarbonDonate = ({ onDonatedCarbon, distance }: CarbonDonateProps) => {
    const [carbon, setCarbon] = useState<boolean>(false);

    const handleCarbon = () => {
        setCarbon(!carbon);
        onDonatedCarbon(!carbon);
    }

    return (
        <div>
            <p className="text-xl font-bold mb-2">Environmental Options:</p>
            <div className="flex justify-between space-y-2 items-center">
                <div className="flex justify-start">
                    <p>Donations : {(distance * 0.2).toFixed(2)} ฿</p>
                </div>
                <div className="flex justify-end">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className={`${carbon && 'peer'} sr-only`} onChange={() => handleCarbon()} checked />
                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-color"></div>
                    </label>
                </div>
            </div>
            <p className="text-xs my-2">Let's work together to reduce the carbon footprint of every journey.</p>
        </div>
    )
}

export default CarbonDonate