import React, { Component } from "react";
import ToolSelector from "./ToolSelector";
import BrushSize from "./BrushSize";

export default class Sidebar extends Component {
	render() {
		const { tools, actions } = this.props;
		const { brush_size } = tools;
		return (
			<div className="sidebar">
				<section className="section section--tool-selector">
					<h3 className="section__heading">Tool</h3>
					<ToolSelector
						tool={ tools.tool }
						action={ actions.selectTool }
					/>
				</section>

				<section className="section section--brush-size">
					<h3 className="section__heading">Brush Size</h3>
					<BrushSize
						brush_size={ brush_size }
						action={ actions.changeSize }
					/>
				</section>
			</div>
		)
	}
}
