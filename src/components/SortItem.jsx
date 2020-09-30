import React from 'react'

function SortItem(props) {
    return (
        <div
            className={'arr-item' + (props.item.eval ? " eval" : "") + (props.item.sorted ? " sorted" : "")}
        >
            {props.item.num}
        </div>
    )
}

export default SortItem