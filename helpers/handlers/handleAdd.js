const requiredFields = {
  academicEducation: [
    "instituicao",
    "curso",
    "grauFormacao",
    "dataInicio",
    "totalHoras",
  ],
};

export const onAdd = async (
  section,
  setData,
  data,
  setError,
  dispatch,
  updateCurriculum,
  itemsField,
  valueFrom,
  currentCurriculum,
) => {
  var status = true;

  requiredFields[section].forEach((field) => {
    if (
      !data.hasOwnProperty(field) ||
      data[field].trim().length === 0 ||
      data.dataInicio === "YYYY-MM"
    ) {
      status = false;
      setError((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: "Preencha o campo corretamente",
        },
      }));
    } else {
      setError((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: "",
        },
      }));
    }
  });

  if (!status) return;

  // setError((prev) => ({
  //   ...prev,
  //   [section]: {
  //     // ...prev[section],
  //     [field]: "",
  //   },
  // }));
  dispatch(
    updateCurriculum(section, itemsField, [
      data,
      ...valueFrom(currentCurriculum, section, itemsField),
    ]),
  );
  setData(null);
};
