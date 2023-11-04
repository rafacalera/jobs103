import axios from "axios";
import { checkRequiredFields } from "../checkRequiredFields";

const handleCurriculumSave = (
  currentCurriculum,
  currentUser,
  dispatch,
  logoutUser,
  router,
) => {
  if (checkRequiredFields(currentCurriculum.basicInfos, "antes de salvar")) {
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
        if (err.response.data === "Token expired") {
          alert("Sua sessão expirou, faça login novamente");
          dispatch(logoutUser());
          router.push("/login");
          return;
        }
        alert("Erro ao salvar currículo");
        console.log("Error: ", err);
      });
  }
};

export { handleCurriculumSave };
