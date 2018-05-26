Meteor.startup(()=>{
    MONGO_URL = Meteor.settings.private.MONGO;
    console.log("mongo", MONGO_URL)
});