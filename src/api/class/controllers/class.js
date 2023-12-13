'use strict';

/**
 * class controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::class.class', ({ strapi }) =>  ({

    async find(ctx) {
let all = "null";
  const res = await strapi.db.query('api::class.class').findMany({
    select:['key','name'], 
     
  });


  const accountSid = "AC61e7d3241d8420b9908841cd33f89d63";
const authToken = "d25237542b85cb673f3b81c9c56cd294";
const client = require('twilio')(accountSid, authToken);
 
return client.video.v1.rooms
               .create({
                  recordParticipantsOnConnect: true,
                  statusCallback: 'http://example.org',
                  type: 'group',
                  uniqueName: 'DailyStaosdddddd'
                })
               .then((room) => {
              return room;
              
               }
                
                
              
                
                );

             
    

      
  
  
    },


}));