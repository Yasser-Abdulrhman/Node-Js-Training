const {Model} = require('objection');
const Channel  =  require('../Models/channels');


class User extends Model {
    // static get tableName(){
    //     return 'users';
    // }

    static tableName = "users";

    static relationMappings = {
            channelRelation: {
                relation: Model.HasOneRelation,
                modelClass: Channel,
                join:{
                    from: 'users.channel_id',
                    to: 'channels.id',
                }

            }
        };

    }


module.exports = User;