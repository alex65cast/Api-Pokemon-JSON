import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
}, { versionKey: false });
const Users = mongoose.model('Users', UserSchema);
export default Users;
//# sourceMappingURL=model.js.map