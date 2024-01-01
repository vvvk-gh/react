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
        const { count } = this.state;
        return (
            <div className="about-card">
                <h5>Count : {count}</h5>
                <button onClick={() => {
                    //updating the state
                    this.setState({
                        count: this.state.count + 1
                    });
                }}>Increase Count</button>
                <h3>{name}</h3>
                <h4>{job}</h4>
                <h5>@vvvk-gh</h5>
            </div>
        )
    }

}

export default UserClass;