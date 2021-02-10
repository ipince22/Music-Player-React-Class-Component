//reemplazar en home para probar------
//------------------------------------------
import React from "react";
//create your first component
export class Home extends React.Component {
	constructor() {
		super();
		this.audio = null; //will not change on reload. prefered: more flexible than method above
		this.state = {};
	}

	render() {
		const audioPlayer = (
			<>
				<div className="audioPlayer">
					<button>
						<i className="fa fa-caret-left" aria-hidden="true" />
					</button>
					<button>
						<i className="fa fa-play" aria-hidden="true" />
					</button>
					<button>
						<i className="fa fa-pause" aria-hidden="true" />
					</button>
					<button>
						<i className="fa fa-caret-right" aria-hidden="true" />
					</button>
				</div>

				<audio />
			</>
		);

		return <>{audioPlayer}</>;
	}
}
