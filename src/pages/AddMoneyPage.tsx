import { IUserProfile } from "@/interfaces/user";
import { userService } from "@/services/user.services";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const AddMoneyPage = () => {
    const [balance, setBalance] = useState<number>(0);
    const [user, setUser] = useState<IUserProfile | null>(null);

    const option = "money"

    const amount: number = parseInt(String(balance - (balance * 0.07)));

    const fetchUser = async () => {
        try {
            const response = await userService.getUserProfile();
            setUser(response.data);
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    }

    const handleAddMoney = async () => {
        try {
            if (user === null) {
                toast.error("Please Login");
            }
            else {
                await userService.addMoney(amount, option, user?._id);
                toast.success("Add Money Success");
            }
        } catch (error) {
            const message = (error as Error).message;
            throw new Error(message);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <div className="container lg:max-w-screen-xl p-4 mx-auto">
            <div className="bg-white space-y-4 max-w-sm mx-auto p-8 rounded-2xl border-2 border-gray-200">
                <div className="space-x-4">
                    <button className="text-gray-900 font-medium text-lg font-BAI">
                        Add Money
                    </button>
                </div>
                <div className="flex flex-col space-y-4">
                    <input
                        type="number"
                        value={balance}
                        onChange={(e) => setBalance(parseInt(e.target.value))}
                        className="border-2 border-gray-200 p-2 text-3xl py-2 rounded-xl"
                    />
                    <input
                        type="number"
                        value={amount}
                        disabled={true}
                        className="border-2 border-gray-200 p-2 text-3xl py-2 rounded-xl"
                    />
                </div>
                <div>
                    <button onClick={() => handleAddMoney()} className="bg-primary-color text-white w-full text-lg p-3 rounded-xl font-BAI font-medium">
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddMoneyPage;
