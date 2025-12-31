export default function formatDate(isoDate, format = "nl-NL") {
  if (!isoDate) return '';

  try {
    const date = new Date(isoDate);

    return new Intl.DateTimeFormat(format, {
      month: "2-digit",
      day: "2-digit",
      year: "numeric"
    }).format(date);
  } catch (e) {
    return isoDate;
  }
}