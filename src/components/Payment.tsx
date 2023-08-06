import { useState } from "react";

type PaymentProps = {
    onPaymentComplete: (isPaymentSuccessful: boolean) => void;
};

const Payment = ({ onPaymentComplete }: PaymentProps) => {
    const [selectedPayment, setSelectedPayment] = useState<boolean>(false);

    const handleSelectedPayment = (): void => {
        setSelectedPayment(!selectedPayment)
        onPaymentComplete(!selectedPayment);
    }
    return (
        <div className="flex items-center justify-center px-5 pb-3 pt-16 font-BAI container mx-auto">
            <div className="w-full mx-auto rounded-lg p-5 text-gray-700">
                <div className="w-full pt-1 pb-5">
                    <div className="bg-primary-color text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                        </svg>

                    </div>
                </div>
                <div className="mb-10">
                    <h1 className="text-center font-bold text-xl uppercase">Secure payment info</h1>
                </div>
                <div className="mb-3 flex -mx-2">
                    <div className="px-2">
                        <label className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" checked />
                            <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-8 ml-3" />
                        </label>
                    </div>
                    <div className="px-2">
                        <label className="flex items-center cursor-pointer">
                            <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                            <img src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png" className="h-8 ml-3" />
                        </label>
                    </div>
                </div>
                <div className="my-3 mt-5">
                    <label className="font-bold text-sm mb-2 ml-1">Name on card</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none transition-colors" placeholder="John Smith" type="text" />
                    </div>
                </div>
                <div className="mb-3">
                    <label className="font-bold text-sm mb-2 ml-1">Card number</label>
                    <div>
                        <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                    </div>
                </div>
                <div className="mb-10">
                    <label className="font-bold text-sm mb-2 ml-1">Security code</label>
                    <div>
                        <input className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none transition-colors" placeholder="000" type="text" />
                    </div>
                </div>
                <div>
                    <button onClick={() => handleSelectedPayment()} disabled={selectedPayment} className="block w-full max-w-xs mx-auto bg-primary-color hover:bg-primary-hover-color focus:bg-primary-hover-color text-white rounded-lg px-3 py-3 font-semibold">
                        <div className="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                            </svg>
                            PAY NOW
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Payment