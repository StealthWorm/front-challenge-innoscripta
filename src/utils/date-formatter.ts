export function getFormattedDate(timeString: string) {
  const date = new Date(timeString);

  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    timeZone: 'UTC'
  }).format(date).replace(',', ' ● ');

  return formattedDate
}
