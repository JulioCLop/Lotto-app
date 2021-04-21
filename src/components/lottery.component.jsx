import React, { Component } from 'react';
import './lottery.style.css';
import Ball from './ball.component';



class Lottery extends Component{
    static defaultProps = {
        title: "Lotto",
        maxBalls: 6,
        maxNum: 40
    }
    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.maxBalls }) };
        this.handleClick = this.handleClick.bind(this);
    }
    gen() {
        this.setState(currentState => ({
            nums: currentState.nums.map(
                number => Math.floor(Math.random() * this.props.maxNum) + 1
            )
        }));
      
    }
    handleClick() {
        this.gen();
   }
    render() {
        return (
            <section className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(number => (
                        <Ball num={number} />
                    ))}
                </div>
                <button onClick={this.handlClick}>Generate</button>
                
            </section>
        )
    };
}

export default Lottery;