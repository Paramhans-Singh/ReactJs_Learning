import { Component } from "react";

class Hero extends Component {
    render() {
        return (
            <>
                <div>
                    <p className="name">
                        <b>Name: Pranav Sharad Yeole</b>
                    </p>

                    <p className="email">Email: pranav@google.com</p>
                    <p className="phone">Phone: 8546465544</p>
                    <p className="address">Address: ABC, xyz street.</p>
                </div>
            </>
        )
    }

}

export default Hero;