import React from 'react';

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
        };
    }
    render() {
        const { name, job } = this.props;
        const { count, count2 } = this.state;
        return (
            <div className="about-card">
                <h5>Count : {count}</h5>
                <h5>Count2 : {count2}</h5>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <h5>@vvvk-gh</h5>
            </div>
        )
    }

}

export default UserClass;