import React from 'react';

// This is just a sample page of how to call a page/view using a render() method, instead
// of the typical 'component={}', in the react-router <Route /> component.

// This is IMPORTANT because everytime you want to do more than just render a component, which
// will be OFTEN, then you would want to use this render() method through the <Route /> instead
// of just 'component={}'. (Likewise if you don't need to pass anything special down, you would
// use just 'component').

function HomeAlert(props) {
    console.log(props.history);
    return(
        <div>
            {props.title}
        </div>
    )
}

export default HomeAlert;