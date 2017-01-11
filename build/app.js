var CompHeader=require('./header.js');
var CompContent=require('./content.js');
var CompHome=require('./home.js');
var CompFooter=require('./footer.js');
require('../styles/usage/app.scss');

var Root=React.createClass({
	render:function(){
		return(
			<div id="app">
				<CompHeader />
				<CompContent />
				<CompFooter />
			</div>
		)
	}
})
ReactDOM.render(<Root/>,document.body);
ReactDOM.render(<CompHome/>,document.getElementById('home'));