var userV, healthcenterV, drugV;

function readFom() {
  userV = document.getElementById("user").value;
  healthcenterV = document.getElementById("healthcenter").value;
  drugV = document.getElementById("drug").value;
  console.log(userV, drugV, healthcenterV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("mestrado_selecao/" + userV)
    .set({
      user: userV,
      healthcenter: healthcenterV,
      drug: drugV,
    });
  alert("Data Inserted");
  document.getElementById("user").value = "";
  document.getElementById("healthcenter").value = "";
  document.getElementById("drug").value = "";
};

document.getElementById("read").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("mestrado_selecao/" + userV)
    .on("value", function (snap) {
      document.getElementById("user").value = snap.val().user;
      document.getElementById("healthcenter").value = snap.val().healthcenter;
      document.getElementById("drug").value = snap.val().drug;
    });
};

document.getElementById("update").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("mestrado_selecao/" + userV)
    .update({
      //   codeNo: codeV,
      user: userV,
      healthcenter: healthcenterV,
      drug: drugV,
    });
  alert("Data Update");
  document.getElementById("user").value = "";
  document.getElementById("healthcenter").value = "";
  document.getElementById("drug").value = "";
};
document.getElementById("delete").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("mestrado_selecao/" + userV)
    .remove();
  alert("Data Deleted");
  document.getElementById("user").value = "";
  document.getElementById("healthcenter").value = "";
  document.getElementById("drug").value = "";
};
