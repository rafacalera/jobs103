import axios from "axios";

const handleCurriculumSave = (currentCurriculum, currentUser) => {
  axios
    .post("/api/curriculum/save", currentCurriculum, {
      headers: {
        "x-access-token": currentUser.token,
      },
    })
    .then((res) => {
      alert("Currículo salvo com sucesso!");
    })
    .catch((err) => {
      alert("Erro ao salvar currículo");
      console.log("Error: ", err);
    });
};

export { handleCurriculumSave };
