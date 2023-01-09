import React, { Component } from 'react';
import './event.scss';



const item = [{ title: 'Space', event:'event.key'}, {title: 32, event: 'event.keycode'}, {title: 'Space', event:'event.code'}]
class Event extends Component {
    constructor(props) {
        super(props)
        this.state = { props: 'title active' }
    };

    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.addEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = (e) => {
        if (e.keyCode === 32)
        {
            this.setState({ props: "title" });
        }
    }

  render() {
    return (
        <div className='key'>
            {item.map((el, key) => {
                return (
                  <div className='box' key={key}>
                        <h6 className='event'>{el.event}</h6>
                        <h4 className={this.state.props} onKeyDown={()=>this.handleKeyDown}>{el.title}</h4>
                  </div>
                );
            })}
      </div>
    )
  }
}

export default Event;





