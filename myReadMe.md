# Notes from React Portfolio

## currying
currying is an approach where functions receive one argument at a time. A classic case study is an event listener function as seen below

	<>
	const handleClick = (param) => () => {
		console.log(param);
	}

	<button onClick={handleClick('name')}></button>

	</>