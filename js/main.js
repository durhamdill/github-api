console.log("talking");

fetch('https://randomuser.me/api/?results=1')

  .then(
    function(response) {
      if (response.status!==200) {
        console.log('Looks like there was a problem. Status Code: ' + response.status);
        return;
      }

      response.json().then(function(data) {
        // console.log(data.results[0].name.first);

        let headerText = `
          <h1>${data.results[0].name.first} ${data.results[0].name.last}</h1>
        `
        let header = document.getElementById("header");
        header.innerHTML += headerText;

        let basicsText = `
          <ul>
            <li><span class="bold">Name:</span> <span>${data.results[0].name.first} ${data.results[0].name.last}</span></li>
            <li><span class="bold">Phone:</span> ${data.results[0].cell}</li>
            <li><span class="bold">Email:</span><a href="mailto:${data.results[0].email}"> ${data.results[0].email}</a></li>
            <li><span class="bold">Location:</span> <span>${data.results[0].location.city}, ${data.results[0].location.state}</span></li>
            <li><span class="bold">Username:</span> ${data.results[0].login.username}</li>
          </ul>
        `
        let basics = document.getElementById("basics");
        basics.innerHTML += basicsText;

        let storyImage = `
          <img src="${data.results[0].picture.large}" alt="User Profile Picture">
          <p>Erwin square acc the boulevard durham freeway scrap exchange bay 7, railroad rigsbee alt-country beaver queen watts-hillandale, lemurs duke bicycle major the bull. Erwin terrace music on the lawn corporation northgate park gritty nc central plaid slow-food seeds, west village northeast central southpoint hipster amshack world beer festival. Dpac pride parrish street duke park alt-country goldenbelt beard, renovation creative class nc central towerview drive baldwin lofts chapel drive, duke butterfly house downtown third fridays merge records.</p>
        `
        let story = document.getElementById("story");
        story.innerHTML += storyImage;
      })
    }
  )



  // Name
  // Github URL
  // Email
  // Company
  // Website
  //
  // Bio
  // Photo
