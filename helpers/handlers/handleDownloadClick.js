import axios from "axios";

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
) => {
  const data = {
    academicEducation: academicEducation,
    basicInfos: basicInfos,
    commonKnowledge: commonKnowledge,
    extraCourses: extraCourses,
    language: language,
    professionalExperience: professionalExperience,
  };

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
    })
    .catch((err) => {
      alert("Ocorreu um erro ao gerar o currículo, tente novamente mais tarde");
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
