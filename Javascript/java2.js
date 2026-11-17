const rows = document.querySelector("#rows");
const status = document.querySelector("#status");

fetch("./Javascript/project.json")
  .then((response) => response.text())
  .then((projectfromjson) => {

    // Step 1 · Look at what we got:
    console.log(projectfromjson)
    console.log(typeof projectfromjson)
    // Step 2 · Turn the text into object:
    const projectList = JSON.parse(projectfromjson)
    console.log(projectList[0])

    // Step 3 · Show ONE anime as a table row:
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="title">${projectList[0].title}</td>
      <td>${projectList[0].type}</td>
      <td>${projectList[0].Releasedate}</td>
      <td>${projectList[0].Createby}</td>
    `;
    rows.append(tr);

    //   Step 4 put inside a loop and change animeList[0] to anime
    // for (const anime of animeList) { 
    //   ...
    // }
  });