import * as React from 'react'
export default class CustomComponent extends React.Component {
    // You need at least two properties in defaultProps to fit into the editor
    static defaultProps = {
        // Edit the name of the menu display
        gaeaName: 'my-textarea', 
        // Ensure that the other components and the overall does not repeat
        // Do not worry, `gaea-web-components` All this field starts with `gaea-`
        gaeaUniqueKey: 'textarea' 
    }

    render() { return <textarea /> }
}