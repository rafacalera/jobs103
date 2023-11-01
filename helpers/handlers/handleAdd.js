const requiredFields = {
  academicEducation: [
    "instituicao",
    "curso",
    "grauFormacao",
    "dataInicio",
    "totalHoras",
  ],
  extraCourses: ["instituicao", "curso", "tipo", "dataInicio", "totalHoras"],
  professionalExperience: ["empresa", "cargo", "dataInicio"],
  language: ["idioma", "nivel"],
  commonKnowledge: ["conhecimento"],
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
      data.dataInicio === "YYYY-MM" ||
      data[field].length === 255
    ) {
      status = false;
      setError((prev) => ({
        ...prev,
        [section]: {
          ...prev[section],
          [field]: "Preencha corretamente",
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
