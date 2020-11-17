import React from 'react'

class Articles extends React.Component {
  render() {
    return (
      <div className='card w-50 mx-auto'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Upvotes</th>
              <th>Date</th>
            </tr>
          </thead>
          {this.props.articles.length &&
            this.props.articles.map((art, i) => {
              return (
                <tbody key={i}>
                  <tr data-testid='article' key='article-index'>
                    <td data-testid='article-title'>{art.title}</td>
                    <td data-testid='article-upvotes'>{art.upvotes}</td>
                    <td data-testid='article-date'>{art.date}</td>
                  </tr>
                </tbody>
              )
            })}
        </table>
      </div>
    )
  }
}

export default Articles
