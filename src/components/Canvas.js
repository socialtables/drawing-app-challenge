import React, { PropTypes, Component } from "react";
import { BRUSH, ERASER } from "../constants/Tools";

let ctx;

export default class Canvas extends Component {
	constructor(props) {
		super(props);
		this.isDrawing = false;
		this.start = this.start.bind(this);
		this.end = this.end.bind(this);
		this.draw = this.draw.bind(this);
		this.strokes = props.strokes;
		this.currentStroke = props.currentStroke;
	}

	componentDidMount() {
		this.refs.canvas.height = window.innerHeight;
		this.refs.canvas.width = window.innerWidth;
		ctx = this.refs.canvas.getContext("2d");
	}

	getStroke() {
		return this.props.tools.brush_size;
	}
	getColor() {
		return this.props.tools.brush_color;
	}

	getX(event) {
		if (event.pageX === undefined) {
			return event.targetTouches[0].pageX - this.refs.canvas.offsetLeft;
		}
		else {
			return event.pageX - this.refs.canvas.offsetLeft;
		}
	}

	getY(event) {
		if (event.pageY === undefined) {
			return event.targetTouches[0].pageY - this.refs.canvas.offsetTop;
		}
		else {
			return event.pageY - this.refs.canvas.offsetTop;
		}
	}

	mouseEvents(event){
		this.currentStroke.points.push({
			x: event.pageX,
			y: event.pageY
		})
	}

	start(event) {
		if (this.props.tools.tool === BRUSH || this.props.tools.tool === ERASER) {
			this.isDrawing = true;
			this.currentStroke = {
				color: this.getColor(),
				size: this.getStroke(),
				points : []
			}
			this.strokes.push(this.currentStroke);
			this.mouseEvents(event);
			ctx.beginPath();
			ctx.moveTo(this.getX(event), this.getY(event));
			event.preventDefault();
		}
	}

	draw(event) {
		if (this.isDrawing) {
			ctx.lineTo(this.getX(event), this.getY(event));
			ctx.lineWidth = this.getStroke();
			switch (this.props.tools.tool){
				case ERASER:
                    ctx.strokeStyle = '#ffffff';
                    break;
				case BRUSH:
                    ctx.strokeStyle = this.getColor();
                    break;
				default:
					return null;
            }
			ctx.lineCap = "round";
			ctx.lineJoin = "round";
			ctx.stroke();
		}
		event.preventDefault();
	}
	end(event) {
		if (this.isDrawing) {
			ctx.stroke();
			ctx.closePath();
			this.isDrawing = false;
		}
		event.preventDefault();
	}

	render() {
		return (
			<canvas
				className="canvas"
				ref="canvas"
				onMouseDown={ this.start }
				onMouseUp={ this.end }
				onMouseMove={ this.draw }
			></canvas>
		)
	}
}

Canvas.propTypes = {
	tools: PropTypes.object.isRequired
}