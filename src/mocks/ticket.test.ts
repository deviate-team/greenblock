import { ITicket } from "@/interfaces/ticket"

export const Ticket: ITicket[] = [
    {
        "id": 1,
        "ticket_id" : "QR123645",
        "title": "Ticket 1",
        "description": "Description 1",
        "depart_location": "Kosovo",
        "arrive_location": "Central African Republic",
        "date": "Thursday, January 2 2020",
        "depart_time": "2020-01-01 17:00:00",
        "arrive_time": "2020-01-01 19:00:00",
        "standard_price": 1000,
        "business_price": 2000,
        "provider": {
            "id": 1,
            "name": "Provider 1",
            "logo": "https://static.vecteezy.com/system/resources/previews/000/511/437/original/travel-tourism-logo-isolated-on-white-background-vector.jpg"
        }
    },
    {
        "id": 2,
        "ticket_id" : "QR1256345",
        "title": "Ticket 2",
        "description": "Description 2",
        "depart_location": "French Guiana",
        "date": "Wednesday, January 1 2020",
        "arrive_location": "Papua New Guinea",
        "depart_time": "2020-01-01 17:00:00",
        "arrive_time": "2020-01-02 19:00:00",
        "standard_price": 1000,
        "business_price": 2000,
        "provider": {
            "id": 2,
            "name": "Provider 2",
            "logo": "https://static.vecteezy.com/system/resources/previews/000/511/437/original/travel-tourism-logo-isolated-on-white-background-vector.jpg"
        }
    },
    {
        "id": 3,
        "ticket_id" : "QR123546",
        "title": "Ticket 3",
        "description": "Description 3",
        "date": "Friday, January 3 2020",
        "depart_location": "Andorra",
        "arrive_location": "Slovakia",
        "depart_time": "2020-01-01 17:00:00",
        "arrive_time": "2020-01-02 19:00:00",
        "standard_price": 1000,
        "business_price": 2000,
        "provider": {
            "id": 3,
            "name": "Provider 3",
            "logo": "https://static.vecteezy.com/system/resources/previews/000/511/437/original/travel-tourism-logo-isolated-on-white-background-vector.jpg"
        }
    },
    {
        "id": 4,
        "ticket_id" : "QR1234",
        "title": "Ticket 4",
        "description": "Description 4",
        "date": "Saturday, January 4 2020",
        "depart_location": "Guadeloupe",
        "arrive_location": "Namibia",
        "depart_time": "2020-01-01 17:00:00",
        "arrive_time": "2020-01-02 19:00:00",
        "standard_price": 1000,
        "business_price": 2000,
        "provider": {
            "id": 4,
            "name": "Provider 4",
            "logo": "https://static.vecteezy.com/system/resources/previews/000/511/437/original/travel-tourism-logo-isolated-on-white-background-vector.jpg"
        }
    },
]