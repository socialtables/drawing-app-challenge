import React, { PropTypes } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import Canvas from "../components/Canvas";
import Sidebar from "../components/Sidebar";

const App = ({tools, actions, strokes, currentStroke}) => (
	<div>
		<Canvas
			tools={tools}
			strokes={strokes}
			currentStroke={currentStroke}
		/>
		<Sidebar
			tools={tools}
			actions={actions}
			strokes={strokes}
			currentStroke={currentStroke}
		/>
	</div>
)

App.propTypes = {
	actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
	tools: state.tools,
	strokes: state.strokes,
	currentStroke: state.currentStroke
})

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App)
