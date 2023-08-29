import { Component } from "react";

class Video extends Component {
  render() {
    const {
      id,
      title,
      description,
      image,
      instructor,
      price
    } = this.props.video;

    const { onAdd, onRemove, isInBag } = this.props;

    return (
      <div className="course">
        <img src={image} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>{instructor}</p>
          <strong>{price}</strong>
          <button onClick={() => (!isInBag ? onAdd(id) : onRemove(id))}>
            {!isInBag ? "Add to bag" : "Remove from bag"}
          </button>
        </div>
      </div>
    );
  }
}

export default Video;
