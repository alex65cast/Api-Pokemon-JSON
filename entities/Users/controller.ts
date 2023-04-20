import Users from './model.js'

export const listSearchUser = async(data) => {

    if(data.name){
        const user = await Users.findOne({name:data});
        return user;
    } else if(data.type){
        const user = await Users.findOne({email:data});
        return user;
    } else{
        const user = await Users.find({});
        return user;
    }
};

export const searchUserById = async(id)=>{

    const user = await Users.findOne({_id:id});
    return user
};

export const createUser = async(newUser) => {

    const user =  new Users(newUser);
    await user.save()
    return user;
};

export const updateUser = async(id,body) => {

    let user = await Users.updateOne({_id:id},body);
    return user;
};

export const deleteUser = async(id) => {

    const user = await Users.deleteOne({_id:id});
    return user;
};


