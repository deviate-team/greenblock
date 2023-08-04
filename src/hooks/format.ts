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

export function formatTimeToISOString(dateString: string): string {
    const now = new Date();
    const [hours, minutes] = dateString.split(':').map(Number);

    now.setUTCHours(hours);
    now.setUTCMinutes(minutes);
    now.setUTCSeconds(0);
    now.setUTCMilliseconds(0);

    return now.toISOString();
}
