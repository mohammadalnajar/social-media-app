const timeElapsed = (prevDate, minify) => {
  const diff = Number(new Date()) - prevDate;
  const minute = 60 * 1000;
  const hour = minute * 60;
  const day = hour * 24;
  const month = day * 30;
  const year = day * 365;

  switch (true) {
    // case diff < minute: {
    //   const seconds = Math.round(diff / 1000);
    //   return `${seconds} ${seconds > 1 ? 'seconds' : 'second'} ago`;
    // }
    case diff < hour: {
      const text = minify ? 'm' : 'minutes ago';
      const minutes = Math.round(diff / minute);
      return `${minutes > 1 ? minutes : ''} ${minutes > 1 ? text : 'just now'}`;
    }
    case diff < day: {
      const hours = Math.round(diff / hour);
      const unit = hours > 1 ? 'hours ago' : 'hour ago';
      const text = minify ? 'h' : `${unit}`;
      return `${hours} ${text}`;
    }
    case diff < month: {
      const days = Math.round(diff / day);
      const unit = days > 1 ? 'days ago' : 'day ago';
      const text = minify ? 'd' : `${unit}`;
      return `${days} ${text}`;
    }

    case diff < year: {
      const months = Math.round(diff / month);
      const unit = months > 1 ? 'months ago' : 'month ago';
      const text = minify ? 'mo' : `${unit}`;
      return `${months} ${text}`;
    }

    case diff > year: {
      const years = Math.round(diff / year);
      const unit = years > 1 ? 'years ago' : 'year ago';
      const text = minify ? 'y' : `${unit}`;
      return `${years} ${text}`;
    }

    default:
      return '';
  }
};

export default timeElapsed;
