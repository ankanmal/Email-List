export const formatDate = (dateUnix) => {
  const timestamp = dateUnix;
  const date = new Date(timestamp);
  const formattedDate = date
    .toLocaleString("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(",", "")
    .replace(/\//g, "/");
  return formattedDate;
};
