export const formatTime = (time: string) => {
    const date = new Date(time);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
};

export const formatDate = (time: string) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${day}/${month}/${year}`;
}

export const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return new Intl.DateTimeFormat('en-US', options).format(date);
};

export function extractDepartureAndArrival(input: string): { department: string, arrival: string } {
    const regex = /Flight Ticket - (.+) to (.+)/;
    const match = input.match(regex);

    if (match && match.length === 3) {
        const department = match[1].trim();
        const arrival = match[2].trim();
        return { department, arrival };
    } else {
        throw new Error('Invalid input format. Expected "Flight Ticket - [Departure] to [Arrival]"');
    }
}
