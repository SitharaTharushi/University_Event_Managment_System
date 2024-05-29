const Event = require("./../models/EventModel");

//Displying events on eventpage code
const events = (req, res) => {
  Event.find({}) // find method without a callback
    .then((events) => {
      res.render("eventpage", { events: events });
    })
    .catch((err) => {
      // Handling errors
      console.error(err);
      res.status(500).send("An error occurred");
    });
};

//app post
const getAllEvents = (req, res) => {
  console.log("Reached getAllEvents function"); //11/11
  let newEvent = new Event({
    name: req.body.name,
    dateAndTime: req.body.date,
    location: req.body.location,
    img: req.body.img,
    message: req.body.message,
    faculty: req.body.faculty,
    batch: req.body.batch,
    organizer: req.body.organizer,
  });
  //const dateAndTime = new Date("2023-11-03T01:11:00");

  newEvent.save();
  res.redirect("/");
};

//newEvent.save();
//res.redirect("/eventpage");
//};

module.exports = { events, getAllEvents };
