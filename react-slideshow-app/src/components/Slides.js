import React from 'react'

class Slides extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slide: this.props.slides[0],
      index: 0,
      restart: true,
      prev: true,
      next: false,
    }
  }

  Restart() {
    this.setState({
      slide: this.props.slides[0],
      index: 0,
      restart: true,
      prev: true,
      next: false,
    })
  }

  Prev() {
    let cur = this.state.index

    if (this.state.index - 1 === 0) {
      this.setState({
        slide: this.props.slides[cur - 1],
        index: cur - 1,
        restart: true,
        prev: true,
        next: false,
      })
    } else {
      this.setState({
        slide: this.props.slides[cur - 1],
        index: cur - 1,
        next: false,
      })
    }
  }

  Next() {
    let cur = this.state.index

    if (this.state.index + 1 === 5) {
      this.setState({
        slide: this.props.slides[cur + 1],
        index: cur + 1,
        restart: false,
        prev: false,
        next: true,
      })
    } else {
      this.setState({
        slide: this.props.slides[cur + 1],
        index: cur + 1,
        restart: false,
        prev: false,
        next: false,
      })
    }
  }

  render() {
    return (
      <div>
        <div id='navigation' className='text-center'>
          <button
            onClick={this.Restart.bind(this)}
            disabled={this.state.restart}
            data-testid='button-restart'
            className='small outlined'>
            Restart
          </button>
          <button
            data-testid='button-prev'
            disabled={this.state.prev}
            className='small'
            onClick={this.Prev.bind(this)}>
            Prev
          </button>
          <button
            data-testid='button-next'
            disabled={this.state.next}
            className='small'
            onClick={this.Next.bind(this)}>
            Next
          </button>
        </div>

        <div id='slide' className='card text-center'>
          <h1 data-testid='title'> {this.state.slide.title} </h1>
          <p data-testid='text'>{this.state.slide.text}</p>
        </div>
      </div>
    )
  }
}

export default Slides
