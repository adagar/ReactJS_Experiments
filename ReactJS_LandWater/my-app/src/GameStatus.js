import React from "react";

class GameStatus extends React.Component {
    render() {
        const { status } = this.props;
return (
    <div
        className = "GameStatus"
        >
        {status}
        </div>
    );
    }
}

export default GameStatus;