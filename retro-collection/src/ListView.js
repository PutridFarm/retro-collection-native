import React, { Component } from 'react';
import './css/listView.css';

class ListView extends React.Component {
	constructor(props) {
  	super(props)
		this.state = {
      content: {
        header: props.header,
        items: props.items
      }
    }
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

export default ListView;
