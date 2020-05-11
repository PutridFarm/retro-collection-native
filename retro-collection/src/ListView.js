import React, { Component } from 'react';
import './css/listView.css';

class ListView extends React.Component {
	constructor(props) {
  	super(props)
		this.state = {
      content: {
        header: 'Collection',
        items: [
          {
						id: 1,
            title: 'The Legend of Zelda',
            //parent: false						// parent is false if list item is top-level
          },
          {
						id: 2,
            title: 'Secret of Mana',
            //parent: 'The Legend of Zelda'
          },
          {
						id: 3,
            title: 'Super Metroid',
            //parent: 'Secret of Mana'
          }
        ]
      }
    }
		const isBackgroundRed = true;
  }

	render() {
  	return (
          <React.Fragment>
						<div className="list-view">
							<div className="list-header">
					      <h2>{this.state.content.header}</h2>
					    </div>
	            <table className="list-view list">
	              <tbody>
	                {
	                  this.state.content.items.map(item => {
	                    return (
	                      <tr>
	                        <td>
	                          <p id={item.id}>{item.title}</p>
	                        </td>
	                      </tr>
	                    )
	                  })
	                }
	              </tbody>
	            </table>
						</div>
          </React.Fragment>
    )
  }
}


export const listView = (props) => {
  return (
    <ListView />
  )
}

//ReactDOM.render(<App />, document.querySelector("#app"))
