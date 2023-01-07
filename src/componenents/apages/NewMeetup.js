import NewMeetupForm from "../layout/meetups/NewMeetupForm";

function NewMeetup() {
  function onAddMeetupHandler(meetupData) {
    fetch("https://ben-three-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
    </section>
  );
}

export default NewMeetup;
