import BsonObjectID from 'bson-objectid';

export const createObjectId = () => {
	const id = new BsonObjectID().toHexString();
	return id;
};