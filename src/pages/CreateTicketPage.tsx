import { formatTimeToISOString } from '@/hooks/format';
import { ICreateTicket, ILocationData } from '@/interfaces/ticket';
import { ticketService } from '@/services/ticket.services';
import { useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const CreateTicketPage = () => {
    const [value, setValue] = useState<DateValueType>({
        startDate: null,
        endDate: null,
    });

    const [depart_time, setDepartTime] = useState<string>('');
    const [arrive_time, setArriveTime] = useState<string>('');

    const navigate = useNavigate();

    const [depart_location, setDepartLocation] = useState<ILocationData>({
        lagitude: 0,
        longitude: 0,
    });
    const [arrive_location, setArriveLocation] = useState<ILocationData>({
        lagitude: 0,
        longitude: 0,
    });

    const [ticket, setTicket] = useState<ICreateTicket>({
        title: '',
        description: '',
        depart_location: depart_location,
        arrive_location: arrive_location,
        date: '',
        depart_time: '',
        arrive_time: '',
        standard_price: 0,
        business_price: 0,
        seat_limit: 0,
    })

    const handleValueChange = (value: DateValueType): void => {
        setValue(value);
        const date = value?.startDate ? value.startDate.toString() : '';
        setTicket({ ...ticket, date: date });
    }

    const handleCreateTicket = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();
        await ticketService.createTicket(ticket);
        navigate('/ticket');
    }
    return (
        <div className="container mx-auto h-screen">
            <div
                className="p-6 flex h-full flex-wrap items-center justify-center text-neutral-800"
            >
                <div className="w-full">
                    <div className="block rounded-lg shadow-lg">
                        <div className="lg:flex lg:flex-wrap">
                            <div
                                className="hidden lg:flex items-center justify-center rounded-tl-lg lg:w-6/12"
                            >
                                <MapContainer
                                    className="w-full h-screen"
                                    center={[18.784926, 98.9830671]} zoom={20}>
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    />
                                    <Marker position={[depart_location.lagitude, depart_location.longitude]}>
                                        <Popup>
                                            Department Location
                                        </Popup>
                                    </Marker>
                                    <Marker position={[arrive_location.lagitude, arrive_location.longitude]}>
                                        <Popup>
                                            Arrival Location
                                        </Popup>
                                    </Marker>
                                </MapContainer>
                            </div>
                            <div className="px-20 lg:w-6/12 p-10 bg-white">
                                <form className="space-y-4 md:space-y-6 font-BAI" onSubmit={handleCreateTicket}>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Ticket Title</label>
                                        <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                            value={ticket.title}
                                            onChange={(e) => {
                                                setTicket({ ...ticket, title: e.target.value });
                                                e.preventDefault();
                                            }}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Ticket Description</label>
                                        <input type="text" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                            value={ticket.description}
                                            onChange={(e) => {
                                                setTicket({ ...ticket, description: e.target.value });
                                                e.preventDefault();
                                            }}
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Depart Location</label>
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={depart_location.lagitude}
                                                onChange={(e) => {
                                                    setDepartLocation({ ...depart_location, lagitude: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mt-7">
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={depart_location.longitude}
                                                onChange={(e) => {
                                                    setDepartLocation({ ...depart_location, longitude: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Arrive Location</label>
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={arrive_location.lagitude}
                                                onChange={(e) => {
                                                    setArriveLocation({ ...arrive_location, lagitude: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mt-7">
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={arrive_location.longitude}
                                                onChange={(e) => {
                                                    setArriveLocation({ ...arrive_location, longitude: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Date</label>
                                        <div className="cursor-pointer border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full">
                                            <Datepicker
                                                useRange={false}
                                                asSingle={true}
                                                value={value}
                                                onChange={handleValueChange} />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Depart Time</label>
                                            <input type="time" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={depart_time}
                                                onChange={(e) => {
                                                    setDepartTime(e.target.value);
                                                    setTicket({ ...ticket, depart_time: formatTimeToISOString(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Arrive Time</label>
                                            <input type="time" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={arrive_time}
                                                onChange={(e) => {
                                                    setArriveTime(e.target.value);
                                                    setTicket({ ...ticket, arrive_time: formatTimeToISOString(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Standard Price</label>
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={ticket.standard_price}
                                                onChange={(e) => {
                                                    setTicket({ ...ticket, standard_price: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block mb-2 text-sm font-medium text-gray-900">Business Price</label>
                                            <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                                value={ticket.business_price}
                                                onChange={(e) => {
                                                    setTicket({ ...ticket, business_price: Number(e.target.value) });
                                                    e.preventDefault();
                                                }}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900">Seat Limit</label>
                                        <input type="number" className="border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-color focus:border-primary-color block w-full p-1.5"
                                            value={ticket.seat_limit}
                                            onChange={(e) => {
                                                setTicket({ ...ticket, seat_limit: Number(e.target.value) });
                                                e.preventDefault();
                                            }}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className="w-full text-white bg-primary-color hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-hover-color font-medium rounded-lg text-sm px-5 py-2.5 text-center">Create Ticket</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateTicketPage