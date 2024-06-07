function getTime(date){
  // Time of the published post
  const publishedTime = new Date(date);

  // Current time
  const currentTime = new Date();

  // Check if the published date is today
  const isToday = publishedTime.toDateString() === currentTime.toDateString();

  let timeString;

  // If published date is today, calculate time difference in hours and minutes
  if (isToday) {
    const timeDifference = currentTime - publishedTime;
    const hours = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutes = Math.floor(
      (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
    );
    if (hours == 0) {
      timeString = `${minutes} minutes ago`;
    } else {
      timeString = `${hours} hours and ${minutes} minutes ago`;
    }
  } else {
    // If published date is not today, show the date only
    timeString = publishedTime.toLocaleDateString();
  }

  return timeString;
};



export default getTime;