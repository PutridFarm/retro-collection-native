import React from 'react';
import './css/listView.css';

export const ListView = ({ header, items }) => {
	return (
				<React.Fragment>
					<div className="list-view">
						<div className="list-header">
							<h2>{header}</h2>
						</div>
						<table className="list-view list">
							<tbody>
								{
									items.map(item => {
										return (
											<tr key={item.id}>
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
