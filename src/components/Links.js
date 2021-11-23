import React from "react";

function Links(props) {
    return (
        <h3>Links
            <a href={props.github}>{props.github}</a>
            <a href={props.linkedin}>{props.linkedin}</a>
        </h3>
    )
}

export default Links;




// ### Links

// Create a new component called `Links`. In this component, display the following:

// - an `<h3>` element with the text of "Links"
// - an `<a>` element with its `href` and text set to the user's Github link, passed
//   down as a prop
// - a second `<a>` element with its `href` and text set to the user's LinkedIn
//   link, passed down as a prop