import axios from "axios";

export default function getEffect(
  currentUser,
  currentCurriculum,
  router,
  dispatch,
  addCurriculum,
  setLoading,
  logoutUser,
) {
  if (!currentUser) {
    router.push("/login");
    return;
  }
  if (!currentCurriculum) {
    axios
      .get("/api/user/info", {
        headers: {
          "x-access-token": currentUser.token,
        },
      })
      .then((response) => {
        const {
          basicInfos,
          academicEducation,
          commonKnowledge,
          extraCourses,
          language,
          professionalExperience,
        } = response.data;
        const basicInfosWithEmptyStrings = Object.fromEntries(
          Object.entries(basicInfos).map(([key, value]) => [key, value ?? ""]),
        );

        academicEducation.items.forEach((item) => {
          const dataInicioSplit = item.dataInicio.split("-");
          const dataFimSplit = item.dataFim?.split("-");
          item.dataInicio = dataInicioSplit[0] + "-" + dataInicioSplit[1];
          item.dataFim = item.dataFim
            ? dataFimSplit[0] + "-" + dataFimSplit[1]
            : "";
        });
        extraCourses.items.forEach((item) => {
          const dataInicioSplit = item.dataInicio.split("-");
          const dataFimSplit = item.dataFim?.split("-");
          item.dataInicio = dataInicioSplit[0] + "-" + dataInicioSplit[1];
          item.dataFim = item.dataFim
            ? dataFimSplit[0] + "-" + dataFimSplit[1]
            : "";
        });
        professionalExperience.items.forEach((item) => {
          const dataInicioSplit = item.dataInicio.split("-");
          const dataFimSplit = item.dataFim?.split("-");
          item.dataInicio = dataInicioSplit[0] + "-" + dataInicioSplit[1];
          item.dataFim = item.dataFim
            ? dataFimSplit[0] + "-" + dataFimSplit[1]
            : "";
        });
        dispatch(
          addCurriculum({
            basicInfos: basicInfosWithEmptyStrings,
            academicEducation: academicEducation,
            commonKnowledge: commonKnowledge,
            extraCourses: extraCourses,
            language: language,
            professionalExperience: professionalExperience,
          }),
        );
        setLoading(false);
      })
      .catch((err) => {
        if (err.response?.data === "Token expired") {
          alert("Sua sessão expirou, faça login novamente");
          dispatch(logoutUser());
          router.push("/login");
          return;
        }
        console.log(err);
      });
  }
  if (currentCurriculum) setLoading(false);
}
