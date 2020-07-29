import React from 'react';
import '../css/listView.css';


export const ListView = ({ header, items, button }) => {

	function getContent()
	{
		console.log("getting content!");
	}

	return (
				<React.Fragment>
					<div className="list-view">
						<div className="list-header">
							<h2>{header}</h2>
							{button}
						</div>
						<table className="list-view list">
							<tbody>
								{
									items.map(item => {
										return (
											<tr key={item.id} onClick={() => {getContent()}}>
												<td>
													<p>{item.title}</p>
												</td>
											</tr>
										)
									})
								}
							</tbody>
						</table>
					</div>
				</React.Fragment>
	);
};
