import React, {Component, PropTypes} from "react";
import {Card} from "../../modules/react-playing-cards/card"
const TYPE = "CARD";
import {DragSource} from "react-dnd";
const cardSource = {
    canDrag(props) {
        // You can disallow drag based on props
        return true;
    },

    isDragging(props, monitor) {
        // // If your component gets unmounted while dragged
        // // (like a card in Kanban board dragged between lists)
        // // you can implement something like this to keep its
        // // appearance dragged:
        // return monitor.getItem().id === props.id;
    },

    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item
        // const item = { id: props.id };
        // return item;
        return {baba:"baba"};
    },

    endDrag(props, monitor, component) {
        // if (!monitor.didDrop()) {
        //     // You can check whether the drop was successful
        //     // or if the drag ended but nobody handled the drop
        //     return;
        // }
        //
        // // When dropped on a compatible target, do something.
        // // Read the original dragged item from getItem():
        // const item = monitor.getItem();
        //
        // // You may also read the drop result from the drop target
        // // that handled the drop, if it returned an object from
        // // its drop() method.
        // const dropResult = monitor.getDropResult();

        // // This is a good place to call some Flux action
        // CardActions.moveCardToList(item.id, dropResult.listId);
    }
};

@DragSource(TYPE, cardSource, (connect, monitor) => ({
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
}))
export class DraggableCard extends Component {
    static propTypes = {
        rank: PropTypes.object.isRequired,
        suit: PropTypes.object.isRequired
    };

    render() {
        const {isDragging, connectDragSource} = this.props;
        return (connectDragSource(<div>
            <Card rank={this.props.rank} suit={this.props.suit}/>
        </div>))
    }
}