import axios from "axios";
import { checkRequiredFields } from "../checkRequiredFields";

export const postDownload = (
  {
    academicEducation,
    basicInfos,
    commonKnowledge,
    extraCourses,
    language,
    professionalExperience,
  },
  currentUser,
  dispatch,
  logoutUser,
  router,
) => {
  const data = {
    academicEducation: academicEducation,
    basicInfos: basicInfos,
    commonKnowledge: commonKnowledge,
    extraCourses: extraCourses,
    language: language,
    professionalExperience: professionalExperience,
  };
  if (checkRequiredFields(basicInfos))
    axios
      .post("/api/curriculum/download", data, {
        headers: {
          "x-access-token": currentUser.token,
        },
      })
      .then((response) => {
        downloadBase64Pdf(
          response.data.base64,
          `Curriculo do ${basicInfos.nome}.pdf`,
        );
        alert("Currículo gerado com sucesso");
      })
      .catch((err) => {
        if (err.response.data === "Token expired") {
          alert("Sua sessão expirou, faça login novamente");
          dispatch(logoutUser());
          router.push("/login");
          return;
        }
        alert(
          "Ocorreu um erro ao gerar o currículo, tente novamente mais tarde",
        );
        console.log(err);
      });
};

const downloadBase64Pdf = (base64String, fileName) => {
  const linkSource = `data:application/pdf;base64,${base64String}`;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
};
