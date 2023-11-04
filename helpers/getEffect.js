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
        const { id, ...basicInfos } = response.data;
        const basicInfosWithEmptyStrings = Object.fromEntries(
          Object.entries(basicInfos).map(([key, value]) => [key, value ?? ""]),
        );
        dispatch(addCurriculum({ basicInfos: basicInfosWithEmptyStrings }));
        setLoading(false);
      })
      .catch((err) => {
        if (err.response.data === "Token expired") {
          alert("Sua sessão expirou, faça login novamente");
          dispatch(logoutUser());
          router.push("/login");
          return;
        }
      });
  }
  if (currentCurriculum) setLoading(false);
}
