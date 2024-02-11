const mongoose = require('mongoose');
let isConncted = false;

export const connectDB = async () => {
	try {
		if (isConncted) return console.log('already connected');
		const db = await mongoose.connect(process.env.MONGO);
		isConncted = db.connections[0].readyState;
	} catch (err) {
		console.log(err);
		throw new Error('Failed to connect');
	}
};
