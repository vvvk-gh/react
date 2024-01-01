import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="about-card">
                <h3>{this.props.name}</h3>
                <h4>{this.props.job}</h4>
                <h5>@vvvk-gh</h5>
            </div>
        )
    }

}

export default UserClass;