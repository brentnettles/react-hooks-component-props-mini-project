import React from 'react'

function Article({title, date, preview}) {
  
  const formattedDate = date || "January 1, 1970";
    return (
    <article>
        <h3>{title}</h3>
        <p>{preview}</p>
        <small>{formattedDate}</small>
        {/* <span>{post.minutes}</p> */}
    </article>
  );
}

export default Article