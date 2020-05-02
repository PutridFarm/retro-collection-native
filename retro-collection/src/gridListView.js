/**
* Name:        Grid-List View
* Description: A React-based grid-list view using Zen Design styles
* @package     Chimera Apps
* @version     1.2.2
* @author      Chimera.Zen
* @copyright   Copyright (c) 2018, Chimera.Zen
* @link        https://github.com/ChimeraZen
* @license     http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*/
import React, { Component } from 'react';
import './gridListView.css';

const GridListViewContext = React.createContext()

class GridListViewProvider extends React.Component {
	render() {
  	return(
    	<GridListViewContext.Provider value={{state: this.props.state}}>
        {this.props.children}
      </GridListViewContext.Provider>
    )
  }
}

class GridView extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {
    	isLoaded: false
    }
  }
  
	componentDidMount() {
    setTimeout(() => {
      this.setState({
      	isLoaded: true
      })
    },100)
  }
  
	render() {
    return (
      <div className={this.state.isLoaded ? "grid-list-view grid" : "grid-list-view grid loading"}>
        <GridListViewContext.Consumer>
          {(context) => (
            context.state.content.items.map(item => {
              return <div key={item.title} className="grid-item">
                <h3>{item.title}</h3>
                <p>{item.parent}</p>
              </div>
            })
          )}
        </GridListViewContext.Consumer>
      </div>
    )
  }
}

class ListView extends React.Component {
	constructor(props) {
  	super(props)
    this.state = {
    	isLoaded: false
    }
  }
  
	componentDidMount() {
    setTimeout(() => {
      this.setState({
      	isLoaded: true
      })
    },100)
  }
  
	render() {
  	return (
      <GridListViewContext.Consumer>
        {(context) => (
          <React.Fragment>
            <table className={this.state.isLoaded ? "grid-list-view list" : "grid-list-view list loading"}>
              <thead>
                <tr>
                  {Object.keys(context.state.content.items[0]).map(key => {
                  	return (
                    	<td key={key}>
                    	  <p>{key}</p>
                    	</td>
                    )
                  })}
                </tr>
              </thead>
              <tbody>
                {
                  context.state.content.items.map(item => {
                    return (
                      <tr key={item.title}>
                        {Object.keys(item).map(index => {
                          return (
                            <td key={item[index]}>
                              <p>{item[index]}</p>
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </React.Fragment>
        )}
      </GridListViewContext.Consumer>
    )
  }
}

const GridListItems = () => {
  return (
    <GridListViewContext.Consumer>
      {(context) => (
        <React.Fragment>
          {context.state.listOptions.isListView
            ? <ListView />
            :	<GridView />
          }
        </React.Fragment>
      )}
    </GridListViewContext.Consumer>
  )
}

const GridListOptions = () => {
  return (
    <div className="grid-list-options">
      <GridListViewContext.Consumer>
        {(context) => (
          <React.Fragment>
            <i className={!context.state.listOptions.isListView ? "fas fa-th-large active" : "fas fa-th-large"} data-type="grid" onClick={context.state.listOptions.handleViewChange}></i>
            <i className={context.state.listOptions.isListView ? "fas fa-th-list active" : "fas fa-th-list"} data-type="list" onClick={context.state.listOptions.handleViewChange}></i>
          </React.Fragment>
        )}
      </GridListViewContext.Consumer>
    </div>
  )
}

const GridListHeader = (props) => {
  return (
  	<div className="grid-list-header">
      <h2>{props.title}</h2>
      <GridListOptions />
    </div>
  )
}

class GridListView extends React.Component {
	constructor() {
  	super()
    this.state = {
    	listOptions: {
        isListView: true,
        handleViewChange: (e) => {
          const view = e.target.getAttribute('data-type')
          const isListView = view === 'grid' ? false : true
          
          this.setState((prevState) => {
            return {
              listOptions: {
                ...prevState.listOptions, 
                isListView: isListView
              }
            }
          })
        }
      },
      content: {
        header: 'Collection',
        items: [
          {
            Games: 'The Legend of Zelda',
            //parent: false						// parent is false if list item is top-level
          },
          {
            title: 'Secret of Mana',
            //parent: false
          },
          {
            title: 'Super Metroid',
            //parent: 'Archery'
          }
        ]
      }
    }
  }
  
	render() {
  	return (
      <GridListViewProvider state={this.state}>
        <div className="grid-list-view">
          <GridListHeader title={this.state.content.header}/>
          <GridListItems />
        </div>
      </GridListViewProvider>
    )
  }
}

export const gridListView = (props) => {
  return (
    <GridListView />
  )
}

//ReactDOM.render(<App />, document.querySelector("#app"))