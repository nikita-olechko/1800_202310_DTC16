function displayCharityInformation() {
  //retreive the documnent id from the url
  let params = new URL(window.location.href); // get the url from the search bar
  let ID = params.searchParams.get("docID");
  console.log(ID);

  db.collection("charities")
    .doc(ID)
    .get()
    .then((thisCharity) => {
      charityInfo = thisCharity.data();
      charityCode = charityInfo.code;
      charityName = charityInfo.name;
      charityDetails = charityInfo.details; 

      document.getElementById("charityName").innerHTML = charityName;
      document.getElementById("charityName").innerHTML = charityName;
      document.getElementById("charityDetails").innerHTML = charityDetails;
      let imgEvent = document.querySelector(".charity-img");
      imgEvent.src = "../images/" + charityCode + ".jpg";
    });
}

displayCharityInformation();

function savePaymentDocumentIDAndRedirect() {
  let params = new URL(window.location.href); //get the url from the search bar
  let ID = params.searchParams.get("docID");
  localStorage.setItem("charityDocID", ID);
  window.location.href = "payment.html";
}
